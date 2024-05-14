import { ComponentProps } from 'react';
import AudioOffIcon from './AudioOffIcon';
import AudioOnIcon from './AudioOnIcon';

export type SvgProps = ComponentProps<'svg'>;

export const Icon = {
  AudioOff: AudioOffIcon,
  AudioOn: AudioOnIcon,
};
