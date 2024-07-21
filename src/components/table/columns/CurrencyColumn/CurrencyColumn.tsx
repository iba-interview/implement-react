import { CurrencyColumnProps } from './CurrencyColumnProps';

const formatCurrency = (value: number) => {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

export function CurrencyColumn({ currency }: CurrencyColumnProps) {
  return <>{formatCurrency(currency)}</>;
}
