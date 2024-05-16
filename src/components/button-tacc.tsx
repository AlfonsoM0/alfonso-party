'use client';
interface Props {
  isNoTACC: boolean;
  onClick?: () => void;
}

export function ButtonTACC({ isNoTACC, onClick }: Props) {
  return (
    <button
      className={`btn btn-circle btn-sm ${onClick ? '' : 'hover:cursor-default'} ${
        isNoTACC ? 'text-success' : 'text-error'
      }`}
      onClick={onClick}
    >
      {isNoTACC ? 'SIN TACC' : 'CON TACC'}
    </button>
  );
}
