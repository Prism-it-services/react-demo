import styled from 'styled-components';

export const LayoutContainer = styled.div`
display: grid;
height: 50vh;
flex-direction: column;


main {
    flex: 1;
    grid-column: span 12;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    main {
      grid-column: span 10;
      grid-column-start: 2;
    }
  }

  @media (min-width: 1200px) {
    main {
      grid-column: span 8;
      grid-column-start: 3;
    }
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;