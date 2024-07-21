import { BufferClient } from './BufferClient';

export class StringBufferClient implements BufferClient<string> {
  maxSize = 10;
  buffer: { timestamp: Date; content: string }[] = [];
}
