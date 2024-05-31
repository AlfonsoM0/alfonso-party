'use client';

import { useEffect, useMemo, useState } from 'react';
import { useGuestListState } from '../../hooks/use-guest-list-state';
import { getGuestList } from '../../utils/get-guest-list';
import { calendarUrl } from 'config/const';

export default function Page() {
  const { guestList, setGuestList, setIsCheckedIn } = useGuestListState();

  const [search, setSearch] = useState('');
  function filterGuestList() {
    return guestList.filter((guest) => guest.name.toLowerCase().includes(search.toLowerCase()));
  }

  function loadGuestList() {
    getGuestList().then(setGuestList);
  }

  const guestListCheckedIn = filterGuestList().filter((guest) => guest.isCheckedIn);
  const guestListPending = filterGuestList().filter((guest) => !guest.isCheckedIn);

  function setTextColor(name: string) {
    if (name.includes('(ORG)')) return 'label-text text-success';
    if (name.includes('(VIP)')) return 'label-text text-warning';
    return 'label-text';
  }

  return (
    <div className="max-w-[400px] m-auto p-3">
      <h1 className="mt-5">Lista de invitados</h1>
      <p className="mb-5 text-xs">
        Los cambios de esta lista se guaran solametne en la memoria de tu dispositivo.
      </p>

      <div className="flex justify-center">
        {guestList.length ? (
          <input
            type="search"
            className="input input-bordered text-center"
            placeholder="Buscar..."
            onChange={({ target }) => setSearch(target.value.toLowerCase())}
          />
        ) : (
          <button onClick={loadGuestList}>Cargar Lista por única vez</button>
        )}
      </div>

      {guestList.length ? (
        <div>
          <section>
            <h2 className="mt-5">
              Pendientes de igresar {guestListPending.length} / {guestList.length}
            </h2>
            <p className="mb-5 text-xs text-left">
              * Algunos pocos invitados incluyen su pareja como acompañante (aprox. 10).
              <a
                className="text-xs btn-ghost text-info"
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                (Ver evento)
              </a>
              <br />* No todos los <span className="text-warning">VIP</span> aparecen en esta lista.
              <br />* Todos los <span className="text-success">organizadores</span> son VIP.
              <br />* Dar prioridad de paso a los <span className="text-warning">VIP</span>{' '}
              (familia, colaboradores, amigos que vienen de lejos).
            </p>
            {guestListPending.map((guest) => (
              <div className="form-control" key={guest.name}>
                <label className="label cursor-pointer">
                  <span className={setTextColor(guest.name)}>{guest.name}</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={guest.isCheckedIn}
                    onChange={() => setIsCheckedIn(guest.name, !guest.isCheckedIn)}
                  />
                </label>
              </div>
            ))}
          </section>

          <section>
            <h2 className="my-5">
              Ya ingresados {guestListCheckedIn.length} / {guestList.length}
            </h2>
            {guestListCheckedIn.map((guest) => (
              <div className="form-control" key={guest.name}>
                <label className="label cursor-pointer">
                  <span className={setTextColor(guest.name)}>{guest.name}</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={guest.isCheckedIn}
                    onChange={() => setIsCheckedIn(guest.name, !guest.isCheckedIn)}
                  />
                </label>
              </div>
            ))}
          </section>
        </div>
      ) : null}
    </div>
  );
}
