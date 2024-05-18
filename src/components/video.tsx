import { ComponentProps } from 'react';

interface BgVideoSrcProps extends ComponentProps<'video'> {
  src: string;
  type: string;
}

export default function VideoSrc({ src, type, ...props }: BgVideoSrcProps) {
  return (
    <video {...props}>
      <source src={src} type={type} />
    </video>
  );
}
