import { Auth } from 'components/auth/auth';
import { AuthNav } from 'components/auth/auth-nav';
import { GuestNav } from 'components/guest-nav';
import { revalidateAdmin } from 'config/revalidate-page';
import type { Metadata } from 'next';

export const revalidate = revalidateAdmin;

export const metadata: Metadata = {
  title: 'Alfonso | Amin',
  description: 'Gestión del evento.',
  manifest: '/manifest-adm.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Auth>
      <AuthNav />
      {children}
    </Auth>
  );
}
