import React from 'react';
import { Section, Content, Title } from 'sophia-components';
import MessageContext from '../../context/message';

const Projects = () => (
  <MessageContext.Consumer>
    {({ projects }) => (
      <Section>
        <Content>
          <Title>{projects.title}</Title>
          <p>{projects.introduction}</p>
        </Content>
      </Section>
    )}
  </MessageContext.Consumer>
);

export default Projects;
