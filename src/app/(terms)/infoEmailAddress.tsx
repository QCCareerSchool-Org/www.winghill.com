'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

export const InfoEmailAddress: FC = () => {
  const [ emailAddress, setEmailAddress ] = useState('');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEmailAddress('info@qccareerschool.com');
  }, []);

  return emailAddress;
};
