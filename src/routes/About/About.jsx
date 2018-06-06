import React, { Fragment } from 'react';
import {
  Content,
  Title,
  Columns,
  Column,
  Container,
  Hero,
  HeroBody,
} from 'sophia-components';
import MessageContext from '../../context/message';
import stack from '../../data/stack';
import Bundle from './components/Bundle';

const About = () => (
  <MessageContext.Consumer>
    {({ about }) => (
      <Fragment>
        <Hero dark>
          <Container>
            <HeroBody>
              <Content>
                <Title>{about.title}</Title>
                {about.paragraphs.map(par => <p key={par}>{par}</p>)}
              </Content>
            </HeroBody>
          </Container>
        </Hero>
        <Container>
          <Columns>
            <Column four>
              <Bundle title="Front-End" items={stack.frontEnd} />
            </Column>
            <Column four>
              <Bundle title="Back-End" items={stack.backEnd} />
              <Bundle title="Languages and Video Games" items={[...stack.languages, ...stack.videoGames]} />
            </Column>
            <Column four>
              <Bundle title="DevTools" items={stack.devTools} />
            </Column>
          </Columns>
        </Container>
      </Fragment>
    )}
  </MessageContext.Consumer>
);

export default About;
