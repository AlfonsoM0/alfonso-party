import Image from 'next/image';
import imgInstagram from '../../public/instagram.svg';
import imgAlfonsoIcon from '../../public/alfonso-app-icon-512x512.png';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mb-5 px-5 text-xs flex justify-between z-[-9]">
      <div className="flex flex-col">
        <p>By Alfonso Montes de Oca</p>
        <small>© 2024</small>
      </div>

      <div className="flex">
        <Link
          href={'https://www.alfonso.ar/'}
          target="_blank"
          rel="noopener noreferrer"
          className="border-none "
        >
          <Image src={imgAlfonsoIcon} alt="Instagram" width={30} height={30} priority />
        </Link>
        <Link
          href={'https://www.instagram.com/montesdeoca_alfonso/'}
          target="_blank"
          rel="noopener noreferrer"
          className="border-none "
        >
          <Image src={imgInstagram} alt="Instagram" width={30} height={30} priority />
        </Link>
      </div>
    </footer>
  );
}
