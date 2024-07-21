import { StarColumnProps } from './StarColumnProps';
import { Rating } from 'primereact/rating';

export function StarColumn(props: StarColumnProps) {
  return <Rating value={props.value} readOnly cancel={false} />;
}
