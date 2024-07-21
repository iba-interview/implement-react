import { BufferProps } from './BufferProps';
import { useNetwork } from '../../hooks/useNetwork';

export function Buffer<T>(props: BufferProps<T>) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const network = useNetwork();
  /* Your code here */

  return <>{props.children}</>;
}
