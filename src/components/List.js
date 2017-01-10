import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.params.listId}</h1>
  }
}

List.propTypes = {
  params: React.PropTypes.Object,
};