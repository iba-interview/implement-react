import { useCustomers } from '../../../infrastructure/api/hooks/useCustomers';
import { Table } from '../../../components/table/Table';

export function Customers() {
  const { isLoading, data } = useCustomers();
  return (
    <div>
      <h1>Customer</h1>
      {
        isLoading && <p>Loading...</p>
      }
      {
        data && <Table value={data.data} columns={[]} />
      }
    </div>
  );
}
