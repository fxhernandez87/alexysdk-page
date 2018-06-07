import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuList, MenuListItem, Icon } from 'sophia-components';
import projects from '../../../data/projects';

const ProjectTabs = ({
  messages, tabSelected, setTabSelected,
}) => (
  <Menu className="stack-menu">
    <MenuList>
      {projects.order.map(item => (
        <MenuListItem
          size="5"
          key={item}
          active={item === tabSelected}
          onClick={() => setTabSelected(item)}
        >
          <span>
            <Icon icon={projects.icons[item]} />{messages.tabs[item]}
          </span>
        </MenuListItem>
    ))}
    </MenuList>
  </Menu>
);

ProjectTabs.propTypes = {
  messages: PropTypes.shape().isRequired,
  tabSelected: PropTypes.string.isRequired,
  setTabSelected: PropTypes.func.isRequired,
};

export default ProjectTabs;
