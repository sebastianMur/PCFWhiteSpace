import styled from 'styled-components';

interface columnas {
  columns: 11;
}

export const Wrapper = styled.div<columnas>`
  height: 120px;
  display: grid;
  grid-template-columns: repeat(${(props: any) => props.columns}, 130px);
  grid-column-gap: 5px;
  align-items: center;
`;
