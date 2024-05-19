'use client';

import { useAuth } from 'hooks';
import { ReactNode } from 'react';
import { FormLogin } from './form-login';

export function Auth({ children }: { children: ReactNode }) {
  const { admin, setAdmin } = useAuth();

  if (admin) return <>{children}</>;
  return (
    <div className="container m-auto h-screen flex justify-center items-center">
      <FormLogin />
    </div>
  );
}
