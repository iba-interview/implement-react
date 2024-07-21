import { TableProps } from './TableProps';

export function Table<T extends object>(props: TableProps<T>) {
  return (
    <div className='flex justify-content-center m-auto p-3'>
      <table>
        <thead>
        <tr>
          <th>
            Header
          </th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  );
}
