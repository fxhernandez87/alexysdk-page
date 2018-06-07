import React, { Fragment } from 'react';
import {
  Title,
  Subtitle,
  Columns,
  Column,
  Container,
  Hero,
  HeroBody,
} from 'sophia-components';
import MessageContext from '../../context/message';
import stack from '../../data/stack';
import Bundle from './components/Bundle';

const Stack = () => (
  <MessageContext.Consumer>
    {({ stack: stackMessages }) => (
      <Fragment>
        <Hero dark>
          <HeroBody>
            <Container>
              <Title>{stackMessages.title}</Title>
              <Subtitle>{stackMessages.description}</Subtitle>
            </Container>
          </HeroBody>
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

export default Stack;
