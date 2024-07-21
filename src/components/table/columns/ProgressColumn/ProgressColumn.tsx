import { ProgressColumnProps } from './ProgressColumnProps';
import { ProgressBar } from 'primereact/progressbar';

export function ProgressColumn({ value }: ProgressColumnProps) {
  return <ProgressBar value={value} showValue={false} style={{ height: '6px' }}></ProgressBar>;
}
