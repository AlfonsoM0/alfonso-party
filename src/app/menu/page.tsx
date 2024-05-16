import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image
        className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        src="/bg_retro.jpg"
        alt="Fiesta Retro"
        width={1920}
        height={1080}
      />
    </main>
  );
}
