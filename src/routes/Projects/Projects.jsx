import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Hero, HeroBody, HeroFoot, Title, Subtitle, Container } from 'sophia-components';
import { withStateHandlers } from 'proppy';
import { attach } from 'proppy-react';
import MessageContext from '../../context/message';
import ProjectTabs from './components/ProjectTabs';
import ProjectBody from './components/ProjectBody';
import projectData from '../../data/projects';
import './projects.sass';

const P = withStateHandlers(
  { tabIndex: 0 },
  {
    changeTab: () => tabIndex => ({ tabIndex }),
  },
);

const Projects = ({ tabIndex, changeTab }) => (
  <MessageContext.Consumer>
    {({ projects }) => (
      <Fragment>
        <Hero dark>
          <HeroBody>
            <Container>
              <Title>{projects.title}</Title>
              <Subtitle>{projects.introduction}</Subtitle>
            </Container>
          </HeroBody>
          <HeroFoot style={{ paddingLeft: 24 }}>
            <Container>
              <ProjectTabs
                messages={projects}
                tabs={projectData.order}
                tabIndex={tabIndex}
                changeTab={changeTab}
              />
            </Container>
          </HeroFoot>
        </Hero>
        <Container style={{ marginTop: 20 }}>
          <ProjectBody messages={projects} projects={projectData[projectData.order[tabIndex]]} />
        </Container>
      </Fragment>
    )}
  </MessageContext.Consumer>
);

Projects.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default attach(P)(Projects);
