'use client';

import { useState } from 'react';
import Link from 'next/link';

interface CardSendWpProps {
  name?: string;
  message?: string;
}

export function UrlEditor({ name, message }: CardSendWpProps): JSX.Element {
  const [nameUser, setNameUser] = useState(name || '');
  const [messageUser, setMessageUser] = useState(message || '');

  const [isSend, setIsSend] = useState(false);

  const formBorder = isSend ? 'border-success' : 'border-error';

  return (
    <div
      className={`card card-compact card-bordered bg-base-100 shadow-xl m-4 ${formBorder} max-w-[700px]`}
    >
      <div className="card-body">
        <form className="form-control flex-row flex-wrap justify-around">
          <label htmlFor="name" className="w-full sm:w-[49%]">
            <span className="label-text block">Nombre</span>
            <input
              className="input input-bordered w-full"
              id="name"
              value={nameUser}
              onChange={(e) => setNameUser(e.target.value)}
              type="text"
            />
          </label>

          <label htmlFor="message" className="w-full sm:w-[49%]">
            <span className="label-text block">Mensaje</span>
            <input
              className="input input-bordered w-full"
              id="message"
              value={messageUser}
              onChange={(e) => setMessageUser(e.target.value)}
              type="text"
            />
          </label>
        </form>

        <div className="tooltip" data-tip="Copiar al portapapeles">
          <button
            type="button"
            onClick={() => {
              setIsSend(!isSend);
              navigator.clipboard.writeText(
                `https://fiesta.alfonso.ar/?n=${btoa(nameUser)}&m=${btoa(messageUser)}`
              );
            }}
          >
            Copiar URL
          </button>
        </div>
      </div>
    </div>
  );
}
