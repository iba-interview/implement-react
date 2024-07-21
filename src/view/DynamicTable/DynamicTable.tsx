import './styles.css';
import { CountryColumn } from '../../components/table/columns/CountryColumn/CountryColumn';
import { ColumnTypes } from '../../components/table/columns/ColumnTypes';
import { RepresentativeColumn } from '../../components/table/columns/RepresentativeColumn/RepresentativeColumn';
import { faker } from '@faker-js/faker';
import { CurrencyColumn } from '../../components/table/columns/CurrencyColumn/CurrencyColumn';
import { DateColumn } from '../../components/table/columns/DateColumn/DateColumn';
import { TagColumn } from '../../components/table/columns/TagColumn/TagColumn';
import { CustomerStatusSeverityConverter } from './CustomerStatusSeverityConverter';
import { ProductStatusSeverityConverter } from './ProductStatusSeverityConverter';
import { ProgressColumn } from '../../components/table/columns/ProgressColumn/ProgressColumn';
import { StarColumn } from '../../components/table/columns/StarColumn/StarColumn';
import { Outlet } from 'react-router-dom';
import { Description } from './Description';

const customerSeverityConverter = new CustomerStatusSeverityConverter();
const productSeverityConverter = new ProductStatusSeverityConverter();

export function DynamicTable() {

  return (
    <div className='w-full' style={{ paddingLeft: 300 }}>
      <h1>Dynamic Table Layout</h1>
      <Description />
      <h2>Column Types</h2>
      <div className='flex justify-content-center m-auto'>
        <table className="border-1">
          <thead>
          <tr>
            <th>{ColumnTypes.STRING}</th>
            <th>{ColumnTypes.COUNTRY}</th>
            <th>{ColumnTypes.REPRESENTATIVE}</th>
            <th>{ColumnTypes.CURRENCY}</th>
            <th>{ColumnTypes.DATE}</th>
            <th>{ColumnTypes.TAGS}</th>
            <th>{ColumnTypes.PROGRESS}</th>
            <th>{ColumnTypes.STAR}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>String Column</td>
            <td>
              <CountryColumn name='Malaysia' code='my' />
            </td>
            <td>
              <RepresentativeColumn name='Asiya Javayant' image={faker.image.avatarGitHub()} />
            </td>
            <td>
              <CurrencyColumn currency={1024} />
            </td>
            <td>
              <DateColumn date='2017-09-24' />
            </td>
            <td>
              <TagColumn value='unqualified' severityConverter={customerSeverityConverter} />
              <TagColumn value='INSTOCK' severityConverter={productSeverityConverter} />
            </td>
            <td>
              <ProgressColumn value={75} />
            </td>
            <td>
              <StarColumn value={4} />
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <Outlet />
    </div>
  );
}
