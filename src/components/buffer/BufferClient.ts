export interface BufferClient<T> {
  maxSize: number;
  buffer: { timestamp: Date, content: T }[];
}
