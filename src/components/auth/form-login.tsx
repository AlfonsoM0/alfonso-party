'use client';

import { useAuth } from 'components/hooks/use-auth';
import { useState } from 'react';
import { logInAdmin } from '../../utils/log-in';

export function FormLogin() {
  const { setAdmin } = useAuth();

  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    logInAdmin({ adminName, password })
      .then((res) => {
        setAdmin(res);
      })
      .catch((e) => {
        console.error(e);
        setAdmin(false);
        alert(e.message);
        setAdminName('');
        setPassword('');
      });
  }

  return (
    <form onSubmit={onSubmit} className="form-control max-w-xs p-5 border border-base-300">
      <label htmlFor="email" className="label">
        Admin
      </label>
      <input
        className="input input-bordered"
        type="text"
        id="admin"
        onChange={(e) => setAdminName(e.target.value)}
        value={adminName}
      />

      <label htmlFor="password" className="label">
        Password
      </label>
      <input
        className="input input-bordered"
        type="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <input className="btn btn-primary mt-10" type="submit" value="INGRESAR" />
    </form>
  );
}
