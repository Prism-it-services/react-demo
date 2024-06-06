// import { Header, Container, SkillsList, SkillItem, CheckboxLabel, Checkbox, SectionTitle, SkillText, SubSkillsList, SubSkillItem, SubSkillText    } from './styles'

// type TechnicalSkills = {
//     [key: string]: SubSkills[];
//   };

//   type SubSkills = {
//     skill: string;
//     subSkills?: string[];
//   };

// const technicalSkills: TechnicalSkills = {
//     'Front End': [
//         { skill: 'React', subSkills: ['React Form Hook', 'React-Router Dom'] },
//         { skill: 'Styled Components' },
//         { skill: 'Ant Design' },
//         { skill: 'Storybook' }
//       ],
//       'Middleware': [
//         { skill: 'Node.js' },
//         { skill: 'ASP.NET' }
//       ],
//       'Database': [
//         { skill: 'RDBMS', subSkills: ['MySQL', 'SQL Server'] },
//         { skill: 'No SQL', subSkills: ['MongoDB', 'Dynamo DB']  },
//       ],
//       'Infrastructure': [
//         { skill: 'AWS services:' },
//         { skill: 'Lambda' },
//         { skill: 'CDK v2.0' },
//         { skill: 'API Gateway' },
//         { skill: 'Route 53' },
//         { skill: 'SSL certificate for https://' },
//         { skill: 'AWS Appsync' },
//         { skill: 'Cloud Front' },
//       ]
//   };
  
//   export const TechnicalSkills = () => {
//     return (
//       <Container>
//         <Header>Technical Skills</Header>
//         <SectionTitle>Demo done</SectionTitle>
//         {Object.keys(technicalSkills).map(section => (
//           <div key={section}>
//             <SectionTitle>{section}:</SectionTitle>
//             <SkillsList>
//               {technicalSkills[section].map(({ skill, subSkills }) => (
//                 <SkillItem key={skill}>
//                   <CheckboxLabel>
//                     <SkillText>{skill}</SkillText>
//                     <Checkbox type="checkbox" />
//                   </CheckboxLabel>
//                   {subSkills && (
//                     <SubSkillsList>
//                       {subSkills.map(subSkill => (
//                         <SubSkillItem key={subSkill}>
//                           <SubSkillText>{subSkill}</SubSkillText>
//                           <Checkbox type="checkbox" />
//                         </SubSkillItem>
//                       ))}
//                     </SubSkillsList>
//                   )}
//                 </SkillItem>
//               ))}
//             </SkillsList>
//           </div>
//         ))}
//       </Container>
//     );
//   };

import React from 'react';
import {
  Header,
  Container,
  SectionTitle,
  SkillsGrid,
  SkillItem,
  MainSkill,
  SubSkillsContainer,
  SubSkillItem,
  SkillText,
  SubSkillText,
  Checkbox,
  SectionContainer
} from './styles';

type TechnicalSkills = {
  [key: string]: SubSkills[];
};

type SubSkills = {
  skill: string;
  subSkills?: string[];
};

const technicalSkills: TechnicalSkills = {
  'Front End': [
    { skill: 'React', subSkills: ['React Form Hook', 'React-Router Dom'] },
    { skill: 'TypeScript' },
    { skill: ' CSS Frameworks', subSkills: [ ' Styled Components', 'Ant Design', 'Boot Strap'  ] },
    { skill: 'Design Systems', subSkills:['Storybook'] },
    { skill: 'Apollo Client (for Graphql)' },
    { skill: 'Testing Framework', subSkills:['Jest'] },
  ],
  'Middleware': [
    { skill: 'Node.js' },
    { skill: 'ASP.NET' }
  ],
  'Database': [
    { skill: 'RDBMS', subSkills: ['MySQL', 'SQL Server'] },
    { skill: 'No SQL', subSkills: ['MongoDB', 'Dynamo DB']  },
    { skill: 'Graph QL Implementation', subSkills: ['using App Sync']  },
  ],
  'Infrastructure': [
    { skill: 'AWS services:', subSkills: [ 'Lambda', 'CDK v2.0', 'API Gateway', 'AWS Appsync', 'S3', 'EC2', 'IAM'  ] },
    { skill: 'CI/CD', subSkills: ['Code Pipeline', 'Code Build'] },
    { skill: 'Version Control', subSkills: ['Git Hub', 'Atlassian BitBukcet'] },
    { skill: 'DNS & SSL', subSkills: ['Route 53', 'Cloud Front', 'AWS Certificate Manager (ACM)' ] },

  ]
};

export const TechnicalSkills = () => {
  return (
    <Container>
      <Header>Technical Skills</Header>
      <SectionTitle>Demo done</SectionTitle>
      {Object.keys(technicalSkills).map(section => (
        <SectionContainer key={section}>
          <SectionTitle>{section}:</SectionTitle>
          <SkillsGrid>
            {technicalSkills[section].map(({ skill, subSkills }) => (
              <SkillItem key={skill}>
                <MainSkill>
                  <SkillText>{skill}</SkillText>
                  <Checkbox type="checkbox" />
                </MainSkill>
                {subSkills && (
                  <SubSkillsContainer>
                    {subSkills.map(subSkill => (
                      <SubSkillItem key={subSkill}>
                        <SubSkillText>{subSkill}</SubSkillText>
                        <Checkbox type="checkbox" />
                      </SubSkillItem>
                    ))}
                  </SubSkillsContainer>
                )}
              </SkillItem>
            ))}
          </SkillsGrid>
        </SectionContainer>
      ))}
    </Container>
  );
};
