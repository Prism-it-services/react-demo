import styled from 'styled-components';

export const HeaderContainer = styled.header`
background: linear-gradient(to bottom, rgb(11, 190, 146), rgb(5, 189, 177));
color: white;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem 2rem;
grid-column: span 12;
justify-content: space-between;

/* @media (min-width: 768px) {
  flex-direction: column;
  justify-content: space-between;
} */

`;



export const Navlinks = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    gap: 20px;
   

    


    @media (min-width: 768px) {
      flex-direction: row;
      gap: 50px;
    }

    > li {
      position: relative; 

      a {
        color: white;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }

      > ul {
        display: none; 
        position: absolute;
        background: linear-gradient(to bottom, rgb(11, 190, 146), rgb(5, 189, 177));
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        top: 100%; 
        left: 40px;

        li {
          color: black; 
          width: 100%; 

          a {
            color: white; 
            padding: 12px 16px;
            display: block; 

            &:hover {
              background-color: #013220; 
            }
          }
        }
      }

      &:hover > ul {
        display: block; 
      }
    }
  }
`;


