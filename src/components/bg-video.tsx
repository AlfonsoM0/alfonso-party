'use client';

import { useState } from 'react';
import { Icon } from './icons';
import dynamic from 'next/dynamic';

const VideoSrc = dynamic(() => import('./video'), { ssr: false });

interface BgVideoProps {
  isWhiteBg?: boolean;
}

export function BgVideo({ isWhiteBg }: BgVideoProps) {
  const videos = ['/bg-retro.mp4', '/bg_discoball_pruple_music.mp4', '/bg_discoball_red_music.mp4'];
  const videoSRC = videos[Math.floor(Math.random() * videos.length)];

  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      {isWhiteBg ? (
        <div className="fixed top-0 left-0 w-full h-full object-cover z-[-9] bg-[rgba(255,255,255,0.9)]" />
      ) : null}

      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-10 right-5 sm:right-20 animate-bounce border rounded-full p-2 bg-transparent hover:bg-black dark:hover:bg-black"
      >
        {!isMuted ? <Icon.AudioOn width={60} /> : <Icon.AudioOff width={60} />}
      </button>

      <VideoSrc
        // src
        src={videoSRC}
        type="video/mp4"
        //video
        poster="/bg-retro.jpg"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-10]"
        autoPlay={true}
        playsInline={true}
        loop={true}
        id="video_background"
        preload="auto"
        muted={isMuted}
        // controls
      />

      <footer className="fixed bottom-5 left-5 text-xs flex flex-col">
        <p>By Alfonso Montes de Oca</p>
        <small>© 2024</small>
      </footer>
    </>
  );
}
