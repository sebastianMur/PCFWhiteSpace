import styled from 'styled-components';
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 124px 270px 1fr;
  grid-template-rows: repeat(2, minmax(40px, auto));
  overflow-x: auto;
  grid-gap: 5px;

  .select-container {
    grid-column: 1 / -1;
  }
  .left-bar {
    grid-column: 1;
  }

  .transactional-business {
    grid-column: 2;
    grid-row: 2;
  }
  .service-lines {
    grid-column: 3 / -1;
    grid-row: 2;
  }
`;
