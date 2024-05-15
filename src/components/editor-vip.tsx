'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { setVip } from '../firebase/set-vip';
import { VIP } from '../firebase/types';
import { revalidatePath } from 'next/cache';
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
    const wpMsg = `¡Hola ${nameUser}! *Tienes una invitación especial en:* https://fiesta.alfonso.ar/${encodeURIComponent(
      nameUser
    )} `;
    navigator.clipboard.writeText(wpMsg);

    if (!nameUser || !rolUser) return;

    if (!isEdit) {
      setNameUser('');
      setRolUser('');
    }

    if (isSend) return;

    const newVip: VIP = {
      guest: nameUser,
      msg: messageUser,
      rol: rolUser,
    };
    setVip(newVip)
      .then(() => console.info(newVip))
      .catch((error) => console.error(error));

    router.refresh();
    setIsSend(true);
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
            {isEdit ? 'Editar' : 'Crear'} y Copiar Mensaje
          </button>
        </div>
      </div>
    </div>
  );
}
