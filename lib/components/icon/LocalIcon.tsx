import Image from 'next/image';
import React, { FC } from 'react';

const ICONS = ['logo', 'logo-colorless'] as const;
type IconType = typeof ICONS[number];

interface LocalIconProps {
  icon: IconType;
}

const LocalIcon: FC<LocalIconProps> = props => {
  if (props.icon === 'logo') return <Image width={100} height={50} src="/svg/logo.svg" alt="Logo" />;

  if (props.icon === 'logo-colorless')
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 33" width={40} height={40}>
        <polygon
          points="13.97 27.59 13.97 32.16 0.11 24.16 0.11 8.16 13.97 0.16 17.93 2.45 4.07 10.45 4.07 21.88 13.97 27.59"
          style={{ fill: '#a6a6a6' }}
        />
        <polyline points="4.07 21.88 13.97 27.59 13.97 32.16 0.11 24.16" style={{ fill: '#b3b3b3' }} />
        <polygon
          points="13.97 16.16 13.97 20.74 23.87 15.02 23.87 21.88 13.97 27.59 13.97 32.16 27.83 24.16 27.83 8.16 13.97 16.16"
          style={{ fill: '#bfbfbf' }}
        />
        <polygon
          points="17.93 2.45 17.93 7.02 8.03 12.74 8.03 19.59 4.07 21.88 4.07 10.45 17.93 2.45"
          style={{ fill: '#ccc' }}
        />
        <polygon points="19.91 17.31 19.91 19.59 23.87 21.88 23.87 15.02 19.91 17.31" style={{ fill: '#ccc' }} />
        <polygon points="10.01 13.88 10.01 18.45 13.97 20.74 13.97 16.16 10.01 13.88" style={{ fill: '#e6e6e6' }} />
        <polygon points="10.01 13.88 13.97 16.16 27.83 8.16 23.87 5.88 10.01 13.88" style={{ fill: '#d9d9d9' }} />
        <polygon
          points="4.07 21.88 13.97 27.59 23.87 21.88 19.91 19.59 13.97 23.02 8.03 19.59 4.07 21.88"
          style={{ fill: '#e6e6e6' }}
        />
      </svg>
    );

  return null;
};

export default LocalIcon;
