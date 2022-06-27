import styled from 'styled-components';

interface columnas {
  columns: 11;
}

export const Wrapper = styled.tr<columnas>`
  display: grid;
  grid-template-columns: repeat(${(props: any) => props.columns}, 132.5px);
  grid-column-gap: 5px;
  align-items: center;
  justify-content: center;
`;
