import { SeverityConverter } from '../../components/table/columns/TagColumn/SeverityConverter';
import { CustomerStatus } from '../../domain/customer';
import { Severity } from '../../domain/common/severity';

export class CustomerStatusSeverityConverter implements SeverityConverter<CustomerStatus> {
  convert(value: CustomerStatus): Severity {
    switch (value) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      case 'renewal':
        return null;
      default:
        return null;
    }
  }
}
