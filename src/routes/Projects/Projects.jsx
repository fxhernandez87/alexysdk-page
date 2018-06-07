import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Hero,
  HeroBody,
  Title,
  Subtitle,
  Container,
  Columns,
  Column,
} from 'sophia-components';
import { withState } from 'proppy';
import { attach } from 'proppy-react';
import MessageContext from '../../context/message';
import ProjectTabs from './components/ProjectTabs';
import ProjectBody from './components/ProjectBody';
import projectData from '../../data/projects';
import './projects.sass';

const P = withState('tabSelected', 'setTabSelected', 'web');

const Projects = ({ tabSelected, setTabSelected }) => (
  <MessageContext.Consumer>
    {({ projects }) => (
      <Fragment>
        <Hero dark>
          <HeroBody>
            <Container>
              <Title text="primary">{projects.title}</Title>
              <Subtitle>{projects.introduction}</Subtitle>
            </Container>
          </HeroBody>
        </Hero>
        <Container className="adk-section">
          <Columns>
            <Column oneQuarter>
              <ProjectTabs
                messages={projects}
                tabSelected={tabSelected}
                setTabSelected={setTabSelected}
              />
            </Column>
            <Column>
              <ProjectBody
                messages={projects}
                projects={projectData[tabSelected]}
              />
            </Column>
          </Columns>
        </Container>
      </Fragment>
    )}
  </MessageContext.Consumer>
);

Projects.propTypes = {
  tabSelected: PropTypes.string.isRequired,
  setTabSelected: PropTypes.func.isRequired,
};

export default attach(P)(Projects);
