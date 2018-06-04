import React from 'react';
import { Hero, HeroBody, HeroFoot, Title, Subtitle } from 'sophia-components';
import MessageContext from '../../context/message';
import ProjectTabs from './components/ProjectTabs';

const Projects = () => (
  <MessageContext.Consumer>
    {({ projects }) => (
      <Hero>
        <HeroBody>
          <Title>{projects.title}</Title>
          <Subtitle>{projects.introduction}</Subtitle>
        </HeroBody>
        <HeroFoot>
          <ProjectTabs />
        </HeroFoot>
      </Hero>
    )}
  </MessageContext.Consumer>
);

export default Projects;
