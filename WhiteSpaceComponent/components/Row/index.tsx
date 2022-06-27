import * as React from 'react';
import { Wrapper } from './wrapper';
import { Cell } from '../Cell';

export const Row = (props: any) => {
  let td = props.cells.map((cell: any) => (
    <Cell
      name={
        cell[
          '_swo_manufacturerid_value@OData.Community.Display.V1.FormattedValue'
        ] ||
        cell[
          '_swo_licensemodelid_value@OData.Community.Display.V1.FormattedValue'
        ]
      }
      id={cell['swo_whitespacedetailid']}
      portfolioLineforWhitespaceid={
        cell['_swo_portfoliolinesforwhitespaceid_value']
      }
      portfolioLineforWhitespacename={
        cell[
          '_swo_portfoliolinesforwhitespaceid_value@OData.Community.Display.V1.FormattedValue'
        ]
      }
      bc={cell['swo_soldby@OData.Community.Display.V1.FormattedValue']}
      context={props.context}
    />
  ));
  console.log(td.length + 'is this');
  return <Wrapper columns={td.length}>{td}</Wrapper>;
};
