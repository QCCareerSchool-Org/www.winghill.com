import type { FC } from 'react';
import Image from 'next/image';

import LogoImage from './logo.png';

interface Props {
  height: number;
}

export const Logo: FC<Props> = ({ height }) => <Image src={LogoImage} alt="Winghill Writing School" style={{ height, width: 'auto' }} />;
