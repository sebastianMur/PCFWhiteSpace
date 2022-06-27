import * as React from 'react';
import { useState, useEffect } from 'react';
import { Wrapper } from './wrapper';
import { Row } from '../Row';
import { OrganizeTable } from './organizetable';

const takeTheTableFilter = (filterValuesby: any, arrayForFilter: any) => {
  return filterValuesby.includes('transactional-business')
    ? arrayForFilter.entities.filter(
        (PortfolioLineForWhitespace: any) =>
          PortfolioLineForWhitespace['swo_name'] === 'Microsoft (MS)' ||
          PortfolioLineForWhitespace['swo_name'] === 'Multivendor (MV)',
      )
    : arrayForFilter.entities.filter(
        (PortfolioLineForWhitespace: any) =>
          PortfolioLineForWhitespace['swo_name'] !== 'Microsoft (MS)' &&
          PortfolioLineForWhitespace['swo_name'] !== 'Multivendor (MV)',
      );
};

export const TableBody = (props: any) => {
  const {
    whitespaceDetails,
    portfolioLineforWhitespaces,
    context,
    filterValuesby,
  } = props;
  const filterTable = takeTheTableFilter(
    filterValuesby,
    portfolioLineforWhitespaces,
  );
  const WhitespaceMatrix = OrganizeTable(filterTable, whitespaceDetails);

  console.log(whitespaceDetails);
  return (
    <Wrapper>
      <tbody>
        {WhitespaceMatrix.map((row: any) => (
          <Row cells={row} bc={'white'} context={props.context}></Row>
        ))}
      </tbody>
    </Wrapper>
  );
};
