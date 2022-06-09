import * as React from 'react';
import { TableContainer } from '../whitespace_table/tablecontainer';
import { LeftTitlesBar } from '../Lefttitlebar';
import { portafolioLinesTestData } from '../../data/portafoliolines';
import { Wrapper } from './wrapper';
import { RetrievePortafolioLine } from '../../Control/retrieveData';

export const container = (props: any) => {
  const { context } = props;
  const portafoliolinesFilter = portafolioLinesTestData.entities.filter(
    row => row.swo_enable,
  );

  return (
    <Wrapper className='wrapper-container'>
      <LeftTitlesBar className='left-title-bar' />
      <TableContainer
        data={[
          {
            'Portafolio Line': '',
            'Practice Layer': 'Microsoft (MS)',
            Enable: true,
            'Created On': ['6/3/2022 8:13:16 AM', '6/3/2022 8:13:16 AM'],
          },
          {
            'Portafolio Line': '',
            'Practice Layer': 'Multivendor (MV)',
            Enable: true,
            'Created On': ['6/3/2022 8:13:16 AM', '6/3/2022 8:13:16 AM'],
          },
        ]}
        name='Transactional Business'
        className='transactional-business col-5'
      />

      <TableContainer
        data={portafoliolinesFilter}
        name='Service Lines'
        className='service-lines col-2'
      />

      <RetrievePortafolioLine context={context} />
    </Wrapper>
  );
};
