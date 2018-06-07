import React, { Fragment } from 'react';
import {
  Title,
  Container,
  Hero,
  HeroBody,
  Subtitle,
  Box,
  Field,
  Control,
  Input,
  Textarea,
  Columns,
  Column,
  Button,
} from 'sophia-components';
import MessageContext from '../../context/message';
import links from '../../data/links';

const Contact = () => (
  <MessageContext.Consumer>
    {({ contact }) => (
      <Fragment>
        <Hero dark>
          <HeroBody>
            <Container>
              <Title text="primary">{contact.title}</Title>
              <Subtitle>{contact.message}</Subtitle>
            </Container>
          </HeroBody>
        </Hero>
        <Container className="adk-section">
          <Columns>
            <Column>
              <Box>
                <form action="https://formspree.io/alexysdk@gmail.com" method="post">
                  <Field>
                    <Control>
                      <Input name="email" placeholder={contact.form.title} />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Textarea name="message" placeholder={contact.form.message} />
                    </Control>
                  </Field>
                  <Field grouped>
                    <Button primary as="input" type="submit">{contact.form.send}</Button>
                  </Field>
                </form>
              </Box>
            </Column>
            <Column>
              <Box>
                <ul>
                  {Object.values(links).map(({ href, icon, title }) => (
                    <li>
                      <Button key={href} white as="a" href={href} target="_blank" icon={icon}>{title}</Button>
                    </li>
                  ))}
                </ul>
              </Box>
            </Column>
          </Columns>
        </Container>
      </Fragment>
    )}
  </MessageContext.Consumer>
);

export default Contact;
