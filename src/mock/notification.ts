import { faker } from '@faker-js/faker';
import EventEmitter from 'events';

export class Notification {
  constructor(
    public id: string,
    public message: string,
    public date: Date,
    public status: 'processing' | 'done' | 'failed' = 'processing',
  ) {
  }
}

const generateRandomNotification = () => {
  return new Notification(
    faker.string.uuid(),
    faker.lorem.sentence(),
    faker.date.recent(),
  );
};

export const KEY = 'sse-notifications-mock';

export class NotificationService {
  public notifications: Notification[] = [];
  processingNotifications: Notification[] = [];
  emit = new EventEmitter();

  constructor() {
    if (window.localStorage.getItem(KEY)) {
      this.load();
    } else {
      this.notifications = faker.helpers.multiple(generateRandomNotification, {
        count: 10,
      });
      this.save();
    }

    const seenId = new Set<string>();
    this.notifications.forEach(n => {
      if (n.status === 'processing' && !seenId.has(n.id)) {
        this.processingNotifications.push(n);
      }
      seenId.add(n.id);
    });
  }

  randomlySetProcessingNotificationToDone() {
    if (this.processingNotifications.length === 0) {
      return;
    }
    const notification = faker.helpers.arrayElement(this.processingNotifications);
    const doneNotification = new Notification(notification.id, notification.message, new Date(), 'done');
    this.processingNotifications = this.processingNotifications.filter(n => n.id !== notification.id);
    this.notifications.push(doneNotification);
    this.save();
    this.emit.emit('notification', doneNotification);
  }

  randomlySetProcessingNotificationToFailed() {
    if (this.processingNotifications.length === 0) {
      return;
    }
    const notification = faker.helpers.arrayElement(this.processingNotifications);
    const failedNotification = new Notification(notification.id, notification.message, new Date(), 'failed');
    this.processingNotifications = this.processingNotifications.filter(n => n.id !== notification.id);
    this.notifications.push(failedNotification);
    this.save();
    this.emit.emit('notification', failedNotification);
  }

  save() {
    window.localStorage.setItem(KEY, JSON.stringify(this.notifications));
  }

  load() {
    const data = window.localStorage.getItem(KEY);
    if (!data) {
      return;
    }
    const notificationsRawData: {
      id: string;
      message: string;
      date: string;
      status: 'processing' | 'done' | 'failed';
    }[] = JSON.parse(data);
    this.notifications = notificationsRawData.map(n => new Notification(n.id, n.message, new Date(n.date), n.status));
    this.notifications.sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}
