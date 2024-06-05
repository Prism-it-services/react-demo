import React from 'react';
import { Container, StyledHeader, Paragraph } from './styles'
import { Layout } from '../Layout/Layout';



export const AboutMe  = () => {
  return (

    <Container>
    <StyledHeader> About me </StyledHeader>
    <Paragraph>Hi, I'm Arun. I have around 24 years of experience in various roles which includes testing/UAT, Operations, Product Management
      , Helpdesk etc. I have worked in large corporation like Citibank and start ups. </Paragraph> 
     <Paragraph> I have taken a career break from May 2015 to Oct 2016 to stay at home and learn fundamentals of programming. During this 18 month break,
      I understood how front end, middle ware and database fits together in a three tier architecture, basic understanding of 
      Operating system VS run time environments like JRE, CLR VS compilers, a good grasp of frameworks like ASP.NET, Spring MVC, Bootstrap, JQuery etc. 
      </Paragraph> 
     <Paragraph> I paused the pursuit of my passion with technology to join my colleague from Citi to work as a Product manager with equity option in a Glasgow/London based
      fintech 'LUUP Group Ltd'.</Paragraph>
     <Paragraph> I have co-founded a fintech 'Orbital' with 4 other partners in 2018 and helped to build it into a sucessful business with 100+ employees. I had to leave the business in Dec 2023 due to difference of opinion with other 
      co-founders.</Paragraph>
      <Paragraph>I'm looking for a job as a Software Developer so that I can pursue my passion with technology.</Paragraph>

  
      </Container>
     
  );
};


