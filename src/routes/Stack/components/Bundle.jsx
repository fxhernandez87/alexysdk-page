import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardContent,
  Image,
  Columns,
  Column,
  Title,
} from 'sophia-components';

const Bundle = ({ title, items }) => (
  <Card>
    <CardHeader>
      <CardHeaderTitle>
        {title}
      </CardHeaderTitle>
    </CardHeader>
    <CardContent>
      <Columns mobile multiline>
        {items.map(item => (
          <Column
            className="is-2-tablet"
            three="widescreen"
            two="desktop"
            six="mobile"
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
            <Title six textCentered>{item.name}</Title>
          </Column>
        ))}
      </Columns>
    </CardContent>
  </Card>
);

Bundle.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Bundle;
