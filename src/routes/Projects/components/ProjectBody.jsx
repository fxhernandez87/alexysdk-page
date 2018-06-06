import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  Columns,
  Column,
  Content,
  Title,
} from 'sophia-components';
import ProjectStack from './ProjectStack';

const ProjectBody = ({ projects, messages }) =>
  projects.map(project => (
    <Card>
      <CardContent>
        <Columns>
          <Column oneQuarter style={{ padding: 20 }}>
            <div className="responsive-image" style={{ backgroundImage: `url(/static/projects/${project.img})`, height: '100%', width: '100%' }} />
          </Column>
          <Column>
            <Content>
              <Title>{project.name}</Title>
              <p>{messages.descriptions[project.id]}</p>
              <ProjectStack stack={project.stack} links={project.links} />
            </Content>
          </Column>
        </Columns>
      </CardContent>
    </Card>
  ));

ProjectBody.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  messages: PropTypes.shape().isRequired,
};

export default ProjectBody;
