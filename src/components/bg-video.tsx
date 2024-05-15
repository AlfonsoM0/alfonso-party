'use client';

import { useEffect, useState } from 'react';
import { Icon } from './icons';

export function BgVideo() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-10 right-5 sm:right-20 animate-bounce border rounded-full p-2 bg-transparent hover:bg-black dark:hover:bg-black"
      >
        {!isMuted ? <Icon.AudioOn width={60} /> : <Icon.AudioOff width={60} />}
      </button>

      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        autoPlay={true}
        playsInline={true}
        loop={true}
        id="video_background"
        preload="auto"
        muted={isMuted}
        // controls
      >
        <source src="/bg-retro.mp4" type="video/mp4" />
      </video>

      <footer className="fixed bottom-5 left-5 text-xs flex flex-col">
        <p>By Alfonso Montes de Oca</p>
        <small>© 2024</small>
      </footer>
    </>
  );
}
