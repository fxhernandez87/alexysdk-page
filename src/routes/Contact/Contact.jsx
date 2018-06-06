import React from 'react';
import { Section, Content, Title, Container } from 'sophia-components';
import MessageContext from '../../context/message';

const Contact = () => (
  <MessageContext.Consumer>
    {({ contact }) => (
      <Container>
        <Section>
          <Content>
            <Title>{contact.title}</Title>
            <p>{contact.message}</p>
          </Content>
        </Section>
      </Container>
    )}
  </MessageContext.Consumer>
);

export default Contact;
