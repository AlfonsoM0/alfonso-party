'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const msgOptions = [
  '¿Sale Jodita Retro?',
  '¡Te invito a mi cumpleaños Retro, Pichan!',
  '¡Sale Fiesta Retro +1000!',
  '¡EXPLOTA la Joda Retro!',
  '¡Metele pal baile Retro!',
];

export function Titles() {
  const searchParams = useSearchParams();
  const name = searchParams.get('n') || 'Fiesta Retro';
  const customMsg = searchParams.get('m');

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
