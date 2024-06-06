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
    { skill: 'React', subSkills: ['State Management libraries like Redux', 'Rendering concepts like Diffs & reconciliation', 'useRef, useContext, useMemo hooks', ] },
    {skill: 'Deep dive into CSS'},
    { skill: 'Javascript Internals', subSkills: ['Scope & Closure', 'Async. Await & Promise'] },
    { skill: 'Javascript Data Structures & Algorithms', subSkills: ['Recursion', 'Search (Linear, Binary)', 'Sort (Bubble, Insertion)', 'Hash Table', 'Stacks & Queues', 'Graphs', 'Trees', 'Heaps'] },
    { skill: 'Bundlers deep dive', subSkills:['Webpack', 'Vite'] },
  ],
  'Large Scale Projects': [
    { skill: 'E-Commerce Market place Platform', subSkills: ['https://newshoppee.co.uk/'] },
    
  ],
  'Generative AI': [
    { skill: 'Foundation models via Amazon BedRock', subSkills: ['Meta -Llama', 'Amazon Titan'] },
    { skill: 'Open AI integration'  },
    { skill: 'Gemini integration'  },
    { skill: 'Fine-tune custom LLM using a Foundation Model' },
    { skill: 'Deep dive into Prompt Engineering' },
  ],
  'Infrastructure': [
    { skill: 'Infra', subSkills: [  'Terraform', 'Dockers', 'Kubernetes'  ] },
    { skill: 'CI/CD', subSkills: ['Jenkins', 'Ansible', 'Integrate testing to code pipeline'] },

  ]
};

export const MyLearningGoals = () => {
  return (
    <Container>
      <Header>Technical Skills</Header>
      {Object.keys(technicalSkills).map(section => (
        <SectionContainer key={section}>
          <SectionTitle>{section}:</SectionTitle>
          <SkillsGrid>
            {technicalSkills[section].map(({ skill, subSkills }) => (
              <SkillItem key={skill}>
                <MainSkill>
                  <SkillText>{skill}</SkillText>
                  
                </MainSkill>
                {subSkills && (
                  <SubSkillsContainer>
                    {subSkills.map(subSkill => (
                      <SubSkillItem key={subSkill}>
                        <SubSkillText>{subSkill}</SubSkillText>
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