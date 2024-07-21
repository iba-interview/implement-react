import { useQuery } from '@tanstack/react-query';
import { Customer } from '../../../domain/customer';
import { DynamicTableDto } from '../../common/dynamicTableDto';

export const useCustomers = () => {
  return useQuery<DynamicTableDto<Customer>>({
    queryKey: ['Customers'],
    queryFn: async () => {
      const response = await fetch('/api/v1/customer');
      return response.json();
    },
  });
};
