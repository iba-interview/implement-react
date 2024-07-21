import { Severity } from '../../../../domain/common/severity';

export interface SeverityConverter<T = string> {
  convert(value: T): Severity;
}
