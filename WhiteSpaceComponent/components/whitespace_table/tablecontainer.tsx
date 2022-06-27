import * as React from 'react';
import { useEffect } from 'react';
import { H } from '../H';
import { TableHeaders } from '../TableHeaders';
import { TableBody } from '../TableBody';
import { InputsContainer } from '../InputsContainer';
import { Wrapper } from './wrapper';
import useApi from '../../hooks/apiCalls';
import { RetrieveWhitespaceDetails } from '../../services/whitespace details/getall';
import { GetAllTotalAccountVolumes } from '../../services/total account volumes/getall';
import { RetrievePortfolioLineForWhitespace } from '../../services/portfolio line for whitespace';
import { portafolioLinesforWhitespaceData } from '../../data/portafoliolinesforwhitespace';
import { totalAccountVolumes } from '../../data/totalAccountVolumes';
import { whitespacedetailtable } from '../../data/whitespacedetail';

export const TableContainer = (props: any) => {
  const { historyRecord, context } = props;
  const getWhitespaceDetail = useApi(RetrieveWhitespaceDetails);
  const getTotalAccountVolumeValues = useApi(GetAllTotalAccountVolumes);
  const getPortfolioLineForWhitespaces = useApi(
    RetrievePortfolioLineForWhitespace,
  );

  const id = historyRecord['swo_historywhitespaceapid'];
  useEffect(() => {
    getWhitespaceDetail.request(context, id);
    getTotalAccountVolumeValues.request(context, id);
    getPortfolioLineForWhitespaces.request(context, id);
  }, []);

  const spanCols = props.className.includes('transactional-business')
    ? 'span 2'
    : 'span 4';

  return (
    <Wrapper colSpan={spanCols} className={props.className}>
      <H name={props.name} />

      {getPortfolioLineForWhitespaces.data && (
        <TableHeaders
          filterValuesby={props.className}
          headerNames={getPortfolioLineForWhitespaces.data}
        />
      )}
      {getPortfolioLineForWhitespaces.error && (
        <TableHeaders
          filterValuesby={props.className}
          headerNames={portafolioLinesforWhitespaceData}
        />
      )}

      {getTotalAccountVolumeValues.data && (
        <InputsContainer
          filterValuesby={props.className}
          quantities={getTotalAccountVolumeValues.data}
        />
      )}
      {getTotalAccountVolumeValues.error && (
        <InputsContainer
          filterValuesby={props.className}
          quantities={totalAccountVolumes}
        />
      )}

      {getWhitespaceDetail.data && getPortfolioLineForWhitespaces.data && (
        <TableBody
          whitespaceDetails={getWhitespaceDetail.data}
          portfolioLineforWhitespaces={getPortfolioLineForWhitespaces.data}
          context={props.context}
          filterValuesby={props.className}
        />
      )}
      {getWhitespaceDetail.error && getPortfolioLineForWhitespaces.error && (
        <TableBody
          whitespaceDetails={whitespacedetailtable}
          portfolioLineforWhitespaces={portafolioLinesforWhitespaceData}
          context={props.context}
          filterValuesby={props.className}
        />
      )}
    </Wrapper>
  );
};
