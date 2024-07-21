export interface DynamicTableColumnDto {
  name: string;
  type?: string;
  sortable: boolean;
  filterable: boolean;
  options?: Record<string, unknown>;
}

export interface DynamicTableDto<T> {
  data: T[];
  metadata: {
    columns: DynamicTableColumnDto[];
    total: number;
  };
}
