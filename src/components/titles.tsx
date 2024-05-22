'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const msgOptions = [
  '¿Sale Jodita Retro?',
  '¡Te invito a mi cumpleaños Retro, Pichan!',
  '¡Sale Fiesta Retro +1000!',
  '¡EXPLOTA la Joda Retro!',
  '¡Que salpique la fiesta Retro!',
  '¡Metele pal baile Retro!',
];

interface TitlesProps {
  guest?: string;
  message?: string;
}

export function Titles({ guest, message }: TitlesProps) {
  const searchParams = useSearchParams();

  const name64 = searchParams.get('n');
  const name = guest || (name64 && atob(name64)) || 'Fiesta Retro';

  const customMsg64 = searchParams.get('m');
  const customMsg = message || (customMsg64 && atob(customMsg64)) || null;

  const [msg, setMsg] = useState(customMsg || 'Cumpleaños Dance');

  useEffect(() => {
    if (name !== 'Fiesta Retro' && !customMsg) {
      const randomMsg = msgOptions[Math.floor(Math.random() * msgOptions.length)];
      setMsg(randomMsg);
    }
  }, [name, customMsg]);

  return (
    <div>
      <h1>{name}</h1>
      <p>{msg}</p>
    </div>
  );
}

/* 
btoa("Hola Mundo")
'SG9sYSBNdW5kbw=='

atob('SG9sYSBNdW5kbw==')
'Hola Mundo'
 */
