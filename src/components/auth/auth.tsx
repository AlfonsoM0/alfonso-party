'use client';

import { useAuth } from 'components/hooks/use-auth';
import { ReactNode } from 'react';
import { FormLogin } from './form-login';
import Link from 'next/link';

export function Auth({ children }: { children: ReactNode }) {
  const { admin, setAdmin } = useAuth();

  if (admin)
    return (
      <>
        <div className="fixed top-0 right-0">
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
        {children}
      </>
    );
  return (
    <div className="container m-auto h-screen flex justify-center items-center">
      <FormLogin />
    </div>
  );
}
