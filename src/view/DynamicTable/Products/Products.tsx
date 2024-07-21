import { useProducts } from '../../../infrastructure/api/hooks/useProducts';
import { Table } from '../../../components/table/Table';

export function Products() {
  const { data, isLoading } = useProducts();
  return (
    <div>
      <h1>Products</h1>
      {
        isLoading && <p>Loading...</p>
      }
      {
        data && <Table value={data.data} columns={[]} />
      }
    </div>
  );
}
