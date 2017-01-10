import React from 'react';

export default class List extends React.Component {

  render() {
    return <h1>{this.props.params.listId}</h1>
  }
}

List.propTypes = {
  params: React.PropTypes.objectOf(React.PropTypes.string)
};