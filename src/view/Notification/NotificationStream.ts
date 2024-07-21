export class NotificationStream {
  private source: EventSource | null = null;

  private constructor() {
    this.source = new EventSource('/api/v1/notification/stream');
  }

  private static instance: NotificationStream;

  static getSource(): EventSource {
    if (!NotificationStream.getInstance().source
      || NotificationStream.getInstance().source?.readyState === EventSource.CLOSED) {
      NotificationStream.instance = new NotificationStream();
    }
    return NotificationStream.getInstance().source!;
  }

  static getInstance() {
    if (!NotificationStream.instance) {
      NotificationStream.instance = new NotificationStream();
    }
    return NotificationStream.instance;
  }
}
