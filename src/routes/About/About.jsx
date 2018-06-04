import React from 'react';
import { Section, Content, Title, Columns, Column } from 'sophia-components';
import MessageContext from '../../context/message';
import stack from '../../data/stack';
import Bundle from './components/Bundle';

const About = () => (
  <MessageContext.Consumer>
    {({ about }) => (
      <Section>
        <Content>
          <Title>{about.title}</Title>
          {about.paragraphs.map(par => <p key={par}>{par}</p>)}
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
        </Content>
      </Section>
    )}
  </MessageContext.Consumer>
);

export default About;
