import { Container, Title, Section, SectionTitle, List, ListItem   } from './styles'

export const TechnicalSkills = () => {

    return (
        <Container>
        <Title>Technical Skills</Title>
        <Section>
          <SectionTitle>Front End:</SectionTitle>
          <List>
            <ListItem>React</ListItem>
            <ListItem>Styled Components</ListItem>
            <ListItem>Ant Design</ListItem>
            <ListItem>Storybook</ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Middleware:</SectionTitle>
          <List>
            <ListItem>Node.js</ListItem>
            <ListItem>ASP.NET</ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Database:</SectionTitle>
          <List>
            <ListItem>MySQL</ListItem>
            <ListItem>SQL Server</ListItem>
            <ListItem>MongoDB</ListItem>
            <ListItem>DynamoDB</ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>Infrastructure:</SectionTitle>
          <List>
            <ListItem>AWS services:</ListItem>
            <List>
              <ListItem>Lambda</ListItem>
              <ListItem>CDK v2.0</ListItem>
              <ListItem>API Gateway</ListItem>
              <ListItem>S3</ListItem>
              <ListItem>Route 53</ListItem>
            </List>
          </List>
        </Section>
        <Section>
          <SectionTitle>DevOps:</SectionTitle>
          <List>
            <ListItem>Infrastructure As Code - using CDK v2.0 and CloudFormation</ListItem>
            <ListItem>CI/CD</ListItem>
          </List>
        </Section>
      </Container>
    
   )
}