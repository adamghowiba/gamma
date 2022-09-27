import Image from 'next/image';
import React, { FC } from 'react';

const ICONS = ['logo'] as const;
type IconType = typeof ICONS[number];

interface LocalIconProps {
  icon: IconType;
}

const LocalIcon: FC<LocalIconProps> = props => {
  if (props.icon === 'logo') return <Image width={100} height={50} src="/svg/logo.svg" alt="Logo" />;

  return null;
};

export default LocalIcon;
