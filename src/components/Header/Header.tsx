import React from 'react';
import { HeaderContainer, Navlinks} from './styles';
import { Grid} from '../../components/Grid/Grid'

const Header = () => {

    return(
        
        <HeaderContainer>
<Navlinks>

    <ul>
        <li><a href = "about-me">About Me</a>
        <ul>
        <li><a href = "timelines-of-my-cv">Career Overview</a></li>
        <li><a href = "technical-skills">Technical Skills</a></li>
        </ul>
        
        </li>
        <li><a href = "proof-of-concept">Proof Of Concept (POC)</a>
        <ul>
            <li><a href = "react-hook-form">React Hook Form</a></li>
            <li><a href = "styled-components">Styled Components</a>
            <ul>
                <li><a href = "rwd-responsive-web-design">RWD Implementation</a></li>
                <li><a href = "design-system-storybook">Design System - Storybook</a></li>
            </ul>
            </li>
            <li><a href = "graphql-with-apollo-client">GraphlQL & Apollo Client</a></li>
            <li><a href = "devops-infrastructure">Devops/Infrastructure</a>
            <ul>
            <li><a href = "aws-cdk-2.0">AWS CDK V2.0</a></li>
            </ul>
            </li>
            <li><a href = "generative-ai">Generative AI</a>
            <ul>
                <li><a href="chat-gpt">Chat GPT</a></li>
            </ul>
            </li>
        </ul>
        </li>
        <li><a href = "my-learning-goals">MY Learning Goals</a></li>
        <li><a href = "my-blogs">My Blogs</a></li>
        <li><a href = "my-github-repo">My Github Repo</a></li>
        
    </ul>
</Navlinks>

        </HeaderContainer>
       
    );
};

export default Header;