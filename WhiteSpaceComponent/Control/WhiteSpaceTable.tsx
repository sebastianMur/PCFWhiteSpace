import * as React from 'react';
import { ColumnNames } from './headers';

const columns = [
  { name: 'Practice' },
  { name: 'Microsoft (MS)' },
  { name: 'Multivendor (MV)' },
];

const column1 = [
  { name: 'Practice' },
  { name: 'Microsoft (MS)' },
  { name: 'Multivendor (MV)' },
];

const column2 = [{ columna1: '', columna2: '', columna3: '' }];

const column3 = [{ columna1: '', columna2: '', columna3: '' }];

export const WhiteSpaceTable = (props: any) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column: any) => (
              <ColumnNames name={column.name} />
            ))}
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
};
