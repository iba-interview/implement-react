import { TagColumnProps } from './TagColumnProps';
import { Tag } from 'primereact/tag';

export function TagColumn(props: TagColumnProps) {
  if (props.severity === undefined && props.severityConverter === undefined) {
    throw new Error('Either severity or severityConverter must be provided');
  }
  const severity = props.severity ?? props.severityConverter!.convert(props.value);
  return <Tag value={props.value} severity={severity} />;
}
