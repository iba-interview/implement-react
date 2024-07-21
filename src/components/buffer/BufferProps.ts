import { ReactElement, ReactNode } from 'react';
import { BufferClient } from './BufferClient';

export interface BufferProps<T> {
  client: BufferClient<T>;
  children?: ReactElement | ReactElement[] | null;
}
