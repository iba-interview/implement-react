import { http, HttpResponse, passthrough } from 'msw';
import { faker } from '@faker-js/faker';
import { Customer } from '../domain/customer';
import { Product } from '../domain/product';
import { DynamicTableDto } from '../infrastructure/common/dynamicTableDto';
import { Notification, NotificationService } from './notification';

const generateRandomCustomer = (): Customer => {
  return {
    id: Math.floor(Math.random() * 9999),
    name: faker.person.fullName(),
    country: {
      name: faker.location.country(),
      code: faker.location.countryCode(),
    },
    company: faker.company.name(),
    date: faker.date.recent(),
    status: faker.helpers.arrayElement(['unqualified', 'negotiation', 'qualified', 'new', 'renewal']),
    verified: faker.datatype.boolean(),
    activity: faker.number.int(100),
    representative: {
      name: faker.person.fullName(),
      image: faker.image.avatar(),
    },
    balance: faker.number.int({
      min: 10000,
      max: 99999,
    }),
  };
};

const generateRandomProduct = (): Product => {
  return {
    id: Math.floor(Math.random() * 9999),
    code: faker.string.alphanumeric(10),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    price: faker.number.int({ min: 10, max: 999 }),
    category: faker.helpers.arrayElement(['Accessories', 'Fitness', 'Clothing', 'Electronics', 'Fitness']),
    quantity: faker.number.int({ min: 1, max: 100 }),
    inventoryStatus: faker.helpers.arrayElement(['OUTOFSTOCK', 'LOWSTOCK', 'INSTOCK']),
    rating: faker.number.int({ min: 1, max: 5 }),
  };
};

type Options = {
  page: number;
  perPage: number;
}

const generateResponseData = <T>(generator: () => T, count: number, total: number, options: Options): T[] => {
  if (options.page * options.perPage > total) {
    return [];
  }
  return faker.helpers.multiple(generator, {
    count,
  });
};

const extractOptions = (url: URL): Options => {
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const perPage = parseInt(url.searchParams.get('perPage') || '10', 10);
  return { page, perPage };
};

const encoder = new TextEncoder();

export const handlers = [
  http.get('/api/v1/customer', ({ request }) => {
    const url = new URL(request.url);
    const data = generateResponseData(generateRandomCustomer, 10, 200, extractOptions(url));
    const response: DynamicTableDto<Customer> = {
      data,
      metadata: {
        columns: [
          { name: 'name', sortable: true, filterable: true },
          { name: 'country', type: 'COUNTRY', sortable: true, filterable: true },
          { name: 'agent', type: 'REPRESENTATIVE', sortable: true, filterable: true },
          { name: 'date', type: 'DATE', sortable: true, filterable: true },
          { name: 'balance', type: 'CURRENCY', sortable: true, filterable: true, options: { currency: 'USD' } },
          {
            name: 'status',
            type: 'TAGS',
            sortable: true,
            filterable: true,
            options: { values: ['negotiation', 'qualified', 'unqualified', 'new', 'renewal'] },
          },
          { name: 'activity', type: 'PROGRESS', sortable: true, filterable: true },
        ],
        total: 200,
      },
    };
    return HttpResponse.json(response);
  }),
  http.get('/api/v1/product', ({ request }) => {
    const url = new URL(request.url);
    const data = generateResponseData(generateRandomProduct, 10, 30, extractOptions(url));
    const response: DynamicTableDto<Product> = {
      data,
      metadata: {
        columns: [
          { name: 'name', sortable: true, filterable: true },
          { name: 'image', type: 'IMAGE', sortable: false, filterable: false },
          { name: 'price', type: 'CURRENCY', sortable: true, filterable: false, options: { currency: 'USD' } },
          { name: 'category', sortable: true, filterable: false },
          { name: 'reviews', type: 'STAR', sortable: true, filterable: false },
          {
            name: 'status',
            type: 'TAGS',
            sortable: true,
            filterable: false,
            options: { values: ['INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'] },
          },
        ],
        total: 30,
      },
    };
    return HttpResponse.json(response);
  }),
  http.get('/api/v1/notification', () => {
    const notificationService = new NotificationService();
    return HttpResponse.json(notificationService.notifications);
  }),
  http.get('/api/v1/notification/stream', () => {
    const notificationService = new NotificationService();
    let channelOpening = true;
    const stream = new ReadableStream({
      start(controller) {
        const timer = setInterval(() => {
          Math.random() > 0.5
            ? notificationService.randomlySetProcessingNotificationToDone()
            : notificationService.randomlySetProcessingNotificationToFailed();
        }, 2000);

        notificationService.emit.on('notification', (notification: Notification) => {
          if (channelOpening) {
            controller.enqueue(encoder.encode(`event: notification\ndata: ${JSON.stringify(notification)}\n\n`));
          }
        });

        setTimeout(() => {
          clearInterval(timer);
          controller.close();
          channelOpening = false;
          Math.random() > 0.5
            ? notificationService.randomlySetProcessingNotificationToDone()
            : notificationService.randomlySetProcessingNotificationToFailed();
        }, Math.random() * 5000 + 5000);
      },
    });
    return new HttpResponse(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
      },
    });
  }),
  http.get('*', () => passthrough()),
];
