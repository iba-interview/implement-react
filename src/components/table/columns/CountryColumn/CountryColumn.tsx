import './flags.css';
import { CountryColumnProps } from './CountryColumnProps';

export function CountryColumn(props: CountryColumnProps) {
  return (
    <div className='flex align-items-center gap-2'>
      <img alt='flag' src='https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png'
           className={`flag flag-${props.code}`} style={{ width: '24px' }} />
      <span>{props.name}</span>
    </div>
  );
}
