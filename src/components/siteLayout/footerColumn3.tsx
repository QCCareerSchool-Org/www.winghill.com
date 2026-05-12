import type { FC } from 'react';

import { getServerData } from '@/lib/getServerData';
import { getTelephoneNumber } from '@/lib/telephone';

export const FooterColumn3: FC = async () => {
  const { countryCode } = await getServerData();
  const telephoneNumber = getTelephoneNumber(countryCode);

  return (
    <>
      <p>Suite 450</p>
      <p>1 Research Court</p>
      <p>Rockville MD 20850</p>
      <p>{telephoneNumber}</p>
    </>
  );
};
