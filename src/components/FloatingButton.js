import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  margin: 10,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingActionButtonExampleSimple = () => (
  <div>
    <FloatingActionButton style={style} backgroundColor="#4527a0">
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default FloatingActionButtonExampleSimple;