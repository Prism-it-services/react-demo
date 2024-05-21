import { Header, Container, SkillsList, SkillItem, CheckboxLabel, Checkbox, SectionTitle, SkillText, SubSkillsList, SubSkillItem, SubSkillText    } from './styles'

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
        { skill: 'Styled Components' },
        { skill: 'Ant Design' },
        { skill: 'Storybook' }
      ],
      'Middleware': [
        { skill: 'Node.js' },
        { skill: 'ASP.NET' }
      ],
      'Database': [
        { skill: 'RDBMS', subSkills: ['MySQL', 'SQL Server'] },
        { skill: 'No SQL', subSkills: ['MongoDB', 'Dynamo DB']  },
      ],
      'Infrastructure': [
        { skill: 'AWS services:' },
        { skill: 'Lambda' },
        { skill: 'CDK v2.0' },
        { skill: 'API Gateway' },
        { skill: 'Route 53' },
        { skill: 'SSL certificate for https://' },
        { skill: 'AWS Appsync' },
        { skill: 'Cloud Front' },
      ]
  };
  
  export const TechnicalSkills = () => {
    return (
      <Container>
        <Header>Technical Skills</Header>
        <SectionTitle>Demo done</SectionTitle>
        {Object.keys(technicalSkills).map(section => (
          <div key={section}>
            <SectionTitle>{section}:</SectionTitle>
            <SkillsList>
              {technicalSkills[section].map(({ skill, subSkills }) => (
                <SkillItem key={skill}>
                  <CheckboxLabel>
                    <SkillText>{skill}</SkillText>
                    <Checkbox type="checkbox" />
                  </CheckboxLabel>
                  {subSkills && (
                    <SubSkillsList>
                      {subSkills.map(subSkill => (
                        <SubSkillItem key={subSkill}>
                          <SubSkillText>{subSkill}</SubSkillText>
                          <Checkbox type="checkbox" />
                        </SubSkillItem>
                      ))}
                    </SubSkillsList>
                  )}
                </SkillItem>
              ))}
            </SkillsList>
          </div>
        ))}
      </Container>
    );
  };