import React from 'react';
import { Hero, HeroBody, Container, Title, Subtitle } from 'sophia-components';
import MessageContext from '../../context/message';

const About = () => (
  <MessageContext.Consumer>
    {({ about }) => (
      <Hero light medium>
        <HeroBody>
          <Container>
            <Title one>{about.title}</Title>
            {about.paragraphs.map(par => <Subtitle four key={par}>{par}</Subtitle>)}
          </Container>
        </HeroBody>
      </Hero>
    )}
  </MessageContext.Consumer>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
