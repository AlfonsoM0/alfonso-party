'use client';

import { useState } from 'react';
import { setVip } from '../firebase/set-vip';
import { VIP } from '../firebase/types';
import { useRouter } from 'next/navigation';

interface CardSendWpProps {
  name?: string;
  msg?: string;
  rol?: string;
  isEdit?: boolean;
  submitCB?: () => void;
}

export function EditorVIP({ name, msg, rol, isEdit }: CardSendWpProps): JSX.Element {
  const router = useRouter();

  const [nameUser, setNameUser] = useState(name || '');
  const [rolUser, setRolUser] = useState(rol || '');
  const [messageUser, setMessageUser] = useState(msg || '¡Te espero en mi Fiesta Retro!');

  const [isSend, setIsSend] = useState(false || isEdit);

  function createAndCopy() {
    const wpMsg = `
¡Hola ${nameUser}!

%0A%0A
*Tienes una invitación especial en:* 
%0A
https://fiesta.alfonso.ar/${nameUser.split(' ').join('%20')} 
%0A%0A
✨🪩✨
%0A%0A
…🕺…
%0A%0A
¡Ya falta poco!
%0A%0A
*En la descripción del evento encontrarás enlaces a:*
%0A%0A
- *🎤 Karaoke:* Agrega un par de canciones de Karaoke Retro a la playlist. Así sabremos lo que cantarás y lo que te gusta para la fiesta.
%0A%0A
- *🍕 Menú:* Si vienes temprano a comer, no olvides reservar tu menú. ¡Compré unas pizzas para invitar, pero no me da para todo el mundo! :V
%0A%0A
Además, puedes instalar la app en tu teléfono… porque quiero quedar en tu memoria 🫶🏻
%0A%0A
¡Nos vemos en la fiesta, _Alfonso_ !🎂🕺
    `;

    if (!nameUser || !rolUser) return;

    if (!isEdit) {
      setNameUser('');
    }

    /* "Link equivalent"
      href={`https://api.whatsapp.com/send?phone=${phone}&text=${wpMsg}`}
      target="_blank"
      rel="noopener noreferrer"
    */
    const phone = process.env.NEXT_PUBLIC_ADMIN_PHONE || '';
    window.location.assign(`https://api.whatsapp.com/send?phone=${phone}&text=${wpMsg}`);

    if (isSend) return;
    const newVip: VIP = {
      guest: nameUser,
      msg: messageUser,
      rol: rolUser,
    };
    setVip(newVip)
      .then(() => {
        console.info(newVip);
        setIsSend(true);
        router.refresh();
      })
      .catch((error) => console.error(error));
  }

  const formBorder = isSend ? 'border-success' : 'border-error';
  return (
    <div
      className={`card card-compact card-bordered bg-base-100 shadow-xl m-4 ${formBorder} max-w-[700px]`}
    >
      <div className="card-body">
        <div className="flex flex-row flex-wrap justify-around gap-2">
          <label htmlFor="name" className="w-full sm:w-[49%]">
            <span className="label-text block">Nombre *</span>
            <input
              className="input input-bordered w-full"
              id="name"
              value={nameUser}
              onChange={(e) => {
                setNameUser(e.target.value);
                setIsSend(false);
              }}
              type="text"
              disabled={isEdit}
              required
            />
          </label>

          <label htmlFor="rol" className="w-full sm:w-[49%]">
            <span className="label-text block">Rol</span>
            <input
              className="input input-bordered w-full"
              id="rol"
              value={rolUser}
              onChange={(e) => {
                setRolUser(e.target.value);
                setIsSend(false);
              }}
              type="text"
            />
          </label>

          <label htmlFor="msg" className="w-full ">
            <span className="label-text block">Mensaje corto *</span>
            <input
              className="input input-bordered w-full"
              id="rol"
              value={messageUser}
              onChange={(e) => {
                setMessageUser(e.target.value);
                setIsSend(false);
              }}
              type="text"
              required
            />
          </label>
        </div>

        <div className="tooltip" data-tip="Copiar al portapapeles">
          <button type="button" onClick={createAndCopy}>
            {isEdit ? 'Editar' : 'Crear'} y Copiar en WP
          </button>
        </div>
      </div>
    </div>
  );
}
