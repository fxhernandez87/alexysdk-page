import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Image,
  Columns,
  Column,
  Subtitle,
} from 'sophia-components';

const Bundle = ({ introduction, items }) => (
  <Box style={{ minHeight: 300 }}>
    <Subtitle>{introduction}</Subtitle>
    <Columns mobile multiline>
      {items.map(item => (
        <Column
          one
          key={item.id}
        >
          <Image
            key={item.id}
            title={item.name}
            alt={item.name}
            src={`/static/logo/${item.logo}`}
            ratio="square"
            style={{ margin: 0 }}
          />
          <Subtitle size="7" textCentered>{item.name}</Subtitle>
        </Column>
        ))}
    </Columns>
  </Box>
);

Bundle.propTypes = {
  introduction: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Bundle;
