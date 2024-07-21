import { RepresentativeColumnProps } from './RepresentativeColumnProps';

export function RepresentativeColumn(props: RepresentativeColumnProps) {
  return (
    <div className='flex align-items-center gap-2'>
      <img alt={props.name} src={props.image} width='32' />
      <span>{props.name}</span>
    </div>
  );
}
