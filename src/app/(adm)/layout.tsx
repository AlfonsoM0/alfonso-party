import { Auth } from 'components/auth/auth';
import { AuthNav } from 'components/auth/auth-nav';
import type { Metadata } from 'next';

// Revalidate every 0 seconds all admin pages
export const revalidate = 0;

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
