import styled from 'styled-components';



export const Container = styled.div`

display: grid;
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
gap: 10px;
padding: 20px;

@media (max-width: 600px) {
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}

@media (min-width: 600px) and (max-width: 1200px) {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

@media (min-width: 1200px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`;

export const GridItem = styled.div`
background-color: #ccc;
padding: 20px;
border: 1px solid #ddd;
text-align: center;
`;