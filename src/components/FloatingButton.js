import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  margin: 10,
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatingButton = () => (
  <div>
    <FloatingActionButton style={style} backgroundColor="#512da8">
      <ContentAdd />
    </FloatingActionButton>
  </div>
);

export default FloatingButton;