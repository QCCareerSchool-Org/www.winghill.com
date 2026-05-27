import type { FC } from 'react';

import type { Price } from '@/domain/price';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  price: Price;
}

export const CoursePrice: FC<Props> = ({ price }) => (
  <h2>{price.currency.symbol}{formatPrice(price.plans.full.total)} or {price.currency.symbol}{formatPrice(price.plans.part.installmentSize)}/mo</h2>
);
