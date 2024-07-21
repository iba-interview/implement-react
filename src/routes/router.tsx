import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { DynamicTable } from '../view/DynamicTable/DynamicTable';
import { Customers } from '../view/DynamicTable/Customers/Customers';
import { Products } from '../view/DynamicTable/Products/Products';
import React from 'react';
import { OnlineEditor } from '../view/OnlineEditor/OnlineEditor';
import { Notification } from '../view/Notification/Notification';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'online-editor',
        element: <OnlineEditor />,
      },
      {
        path: 'notifications',
        element: <Notification />,
      },
      {
        path: 'dynamic-table',
        element: <DynamicTable />,
        children: [
          {
            path: 'Customers',
            element: <Customers />,
          },
          {
            path: 'Products',
            element: <Products />,
          },
        ],
      },
    ],
  },
]);