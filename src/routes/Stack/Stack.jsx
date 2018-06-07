import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Title,
  Subtitle,
  Columns,
  Column,
  Container,
  Hero,
  HeroBody,
  Menu,
  MenuList,
  MenuListItem,
  Icon,
} from 'sophia-components';
import { withState } from 'proppy';
import { attach } from 'proppy-react';
import MessageContext from '../../context/message';
import stack from '../../data/stack';
import Bundle from './components/Bundle';
import './stack.sass';

const P = withState('stackSelected', 'setStackSelected', 'frontEnd');

const Stack = ({ stackSelected, setStackSelected }) => (
  <MessageContext.Consumer>
    {({ stack: stackMessages }) => (
      <Fragment>
        <Hero dark>
          <HeroBody>
            <Container>
              <Title text="primary">{stackMessages.title}</Title>
              <Subtitle>{stackMessages.description}</Subtitle>
            </Container>
          </HeroBody>
        </Hero>
        <Container className="adk-section">
          <Columns>
            <Column oneQuarter>
              <Menu className="stack-menu">
                <MenuList>
                  {stack.order.map(item => (
                    <MenuListItem
                      size="5"
                      key={item}
                      active={item === stackSelected}
                      onClick={() => setStackSelected(item)}
                    >
                      <span>
                        <Icon icon={stack.icons[item]} />{stackMessages[item].title}
                      </span>
                    </MenuListItem>
                  ))}
                </MenuList>
              </Menu>
            </Column>
            <Column>
              <Bundle
                introduction={stackMessages[stackSelected].introduction}
                items={stack[stackSelected]}
              />
            </Column>
          </Columns>
        </Container>
      </Fragment>
    )}
  </MessageContext.Consumer>
);

Stack.propTypes = {
  stackSelected: PropTypes.string.isRequired,
  setStackSelected: PropTypes.func.isRequired,
};

export default attach(P)(Stack);
