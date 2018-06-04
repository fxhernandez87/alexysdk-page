import React from 'react';
import { Section, Content, Title } from 'sophia-components';
import MessageContext from '../../context/message';

const Contact = () => (
  <MessageContext.Consumer>
    {({ contact }) => (
      <Section>
        <Content>
          <Title>{contact.title}</Title>
          <p>{contact.message}</p>
        </Content>
      </Section>
    )}
  </MessageContext.Consumer>
);

export default Contact;
