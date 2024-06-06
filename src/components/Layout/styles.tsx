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

export const LayoutContainerNew = styled.div`

display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;


`;

const Main = styled.main`
  grid-column: 2 / span 11;
  padding: 1rem;
`;

