import { Menu } from 'primereact/menu';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from 'primereact/menuitem';

export function Sidebar() {
  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      label: 'Q1. Online Editor',
      items: [
        {
          label: 'Editor',
          command: () => navigate('/online-editor'),
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: 'Q2. Notifications',
      items: [{
        label: 'Notifications',
        command: () => navigate('/notifications'),
      }],
    },
    {
      separator: true,
    },
    {
      label: 'Q3. Dynamic Table',
      items: [
        {
          label: 'Customers',
          command: () => navigate('/dynamic-table/Customers'),
        },
        {
          label: 'Products',
          command: () => navigate('/dynamic-table/Products'),
        },
      ],
    },
  ];

  return (
    <aside className='fixed left-0 top-0 h-full' style={{ width: 300 }}>
      <Menu model={items} className='w-full h-full' />
    </aside>
  );
}
