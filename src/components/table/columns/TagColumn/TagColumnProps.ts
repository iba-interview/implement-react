import { Severity } from '../../../../domain/common/severity';
import { SeverityConverter } from './SeverityConverter';

export interface TagColumnProps {
  value: string;
  severity?: Severity;
  severityConverter?: SeverityConverter;
}
