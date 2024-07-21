import { DateColumnProps } from './DateColumnProps';

const formatDate = (date: string | Date) => new Date(date).toLocaleDateString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

export function DateColumn({ date }: DateColumnProps) {
  return <div>{formatDate(date)}</div>;
}
