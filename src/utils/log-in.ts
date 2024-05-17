'use server';

export async function logInAdmin({
  adminName,
  password,
}: {
  adminName: string;
  password: string;
}): Promise<boolean> {
  const envAdmin = process.env.ADMIN_NAME;
  const envPass = process.env.ADMIN_PASS;

  if (envAdmin && envPass) {
    if (adminName === envAdmin && password === envPass) {
      return true;
    } else return false;
  }

  throw new Error('No hay credenciales de administrador');
}

export type LogInAdmin = typeof logInAdmin;
