/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'sophia-components';

const ProjectTabs = ({
  messages, tabs, tabIndex, changeTab,
}) => {
  const tabsTranslated = tabs.map(tab => messages.tabs[tab]);
  return (
    <Tabs boxed tabs={tabsTranslated} activeTabIndex={tabIndex} onTabClick={changeTab} />
  );
};

ProjectTabs.propTypes = {
  messages: PropTypes.shape().isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabIndex: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
};

export default ProjectTabs;
