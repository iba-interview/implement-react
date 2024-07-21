import { useQuery } from '@tanstack/react-query';
import { Product } from '../../../domain/product';
import { DynamicTableDto } from '../../common/dynamicTableDto';

export const useProducts = () => {
  return useQuery<DynamicTableDto<Product>>({
    queryKey: ['Products'],
    queryFn: async () => {
      const response = await fetch('/api/v1/product');
      return response.json();
    },
  });
};
