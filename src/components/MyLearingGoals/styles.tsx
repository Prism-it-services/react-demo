

import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-top: 20px;
`;

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column; /* List skills vertically */
  gap: 20px;
  margin-top: 10px;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column; /* List main skill and sub-skills vertically */
  gap: 10px;
`;

export const MainSkill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap; /* Prevent text wrapping */
  padding: 5px 0;
  /* font-weight: bold; 
  font-style: italic; */
`;

export const SubSkillsContainer = styled.div`
  display: flex;
  flex-direction: column; /* List sub-skills vertically */
  gap: 5px;
  padding-left: 20px; /* Indent sub-skills */
`;

export const SubSkillItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap; /* Prevent text wrapping */
`;

export const SkillText = styled.span`
  margin-left: 1px;
  text-align: left;
`;

export const SubSkillText = styled.span`
  flex: 1;
  margin-left: 10px;
  &:before {
    content: "• "; 
    font-size: 1.7rem; 
    margin-right: 5px;
    line-height: 0; 
    
  }
`;

export const Checkbox = styled.input`
  margin-left: 5px;
`;

export const SectionContainer = styled.div`
  margin-bottom: 30px;
`;

