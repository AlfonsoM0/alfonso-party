'use client';

import { useAuth } from '../../hooks/use-auth';
import Link from 'next/link';

export function AuthNav() {
  const { setAdmin } = useAuth();

  return (
    <div className="fixed top-0 right-0 z-[1]">
      <div className="tooltip tooltip-bottom" data-tip="Gestionar Menus">
        <Link className="btn btn-md btn-ghost" type="button" href="/e-menu">
          🍕
        </Link>
      </div>
      <div className="tooltip tooltip-bottom" data-tip="Editar VIPS">
        <Link className="btn btn-md btn-ghost" type="button" href="/e-vip">
          🪪
        </Link>
      </div>
      <div className="tooltip tooltip-left" data-tip="Cerrar Sesión de Administrador">
        <button className="btn btn-md btn-ghost" type="button" onClick={() => setAdmin(false)}>
          ❌
        </button>
      </div>
    </div>
  );
}
