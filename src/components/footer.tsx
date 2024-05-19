import Image from 'next/image';
import imgInstagram from '../../public/instagram.svg';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full mb-5 px-5 text-xs flex justify-between z-[-9]">
      <div className="flex flex-col">
        <p>By Alfonso Montes de Oca</p>
        <small>© 2024</small>
      </div>
      <Link
        href={'https://www.instagram.com/montesdeoca_alfonso/'}
        rel="noopener noreferrer"
        className="border-none "
      >
        <Image src={imgInstagram} alt="Instagram" width={30} height={30} priority />
      </Link>
    </footer>
  );
}
