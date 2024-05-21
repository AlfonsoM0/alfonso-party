import { Auth } from 'components/auth/auth';
import { AuthNav } from 'components/auth/auth-nav';
import { GuestNav } from 'components/guest-nav';
import type { Metadata } from 'next';

// Revalidate every 30 seconds all admin pages
export const revalidate = 30;

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
      <GuestNav style={{ top: 'calc(100vh - 40px)' }} />
      {children}
    </Auth>
  );
}
