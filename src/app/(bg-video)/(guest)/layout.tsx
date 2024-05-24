import { GuestNav } from 'components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <GuestNav />
      {children}
    </div>
  );
}
