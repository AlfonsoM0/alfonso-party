'use client';

import { useAuth } from 'components/hooks/use-auth';
import { ReactNode } from 'react';
import { FormLogin } from './form-login';
import Link from 'next/link';

export function Auth({ children }: { children: ReactNode }) {
  const { admin, setAdmin } = useAuth();

  if (admin) return <>{children}</>;
  return (
    <div className="container m-auto h-screen flex justify-center items-center">
      <FormLogin />
    </div>
  );
}
