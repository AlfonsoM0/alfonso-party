import { Auth } from 'components/auth/auth';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alfonso | Amin',
  description: 'Gestión del evento.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Auth>{children}</Auth>;
}
