import React from 'react';
import PropTypes from 'prop-types';
import { Image, Level, LevelLeft, LevelRight, LevelItem } from 'sophia-components';
import { mapped } from '../../../data/stack';

const ProjectStack = ({ stack, links }) => {
  console.log(stack);
  console.log(links);
  const images = stack.map(item => (
    <Image
      key={item}
      title={mapped[item].name}
      alt={mapped[item].name}
      square="32"
      src={`/static/logo/${mapped[item].logo}`}
    />
  ));
  const linksElement = !links ? null : links.map(link => (
    <a key={link.href} href={link.href} target="_blank" title={link.title}>
      <Image
        alt={link.title}
        key={link.href}
        square="32"
        src={`/static/${link.img}`}
      />
    </a>
  ));
  return (
    <Level className="stack-container">
      <LevelLeft>
        {linksElement}
      </LevelLeft>
      <LevelRight>
        <LevelItem>
          {images}
        </LevelItem>
      </LevelRight>
    </Level>
  );
};

ProjectStack.propTypes = {
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.shape()),
};

ProjectStack.defaultProps = {
  links: null,
};

export default ProjectStack;
