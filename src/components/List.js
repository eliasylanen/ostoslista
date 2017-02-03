import React from 'react';
import Search from './Search';
import Table from './Table';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import {grey500} from 'material-ui/styles/colors';
import {grey800} from 'material-ui/styles/colors';

const styles = {
  listName: {
    color: '#424242',
    paddingLeft: '10px',
    textTransform: 'uppercase',
    fontWeight: 400
  },
  icon: {
    marginLeft: 15,
    cursor: 'pointer',
    color: '#757575',
    width: 21,
    height: 21
  },
  sharedWithText: {
    fontSize: 12,
    marginLeft: 14,
    marginTop: 20,
    marginBottom: 13,
    paddingBottom: 9,
    color: '#838383'
  },
}

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {value: null};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  render() {
    return ( 
      <div>
        <Search onChange={this.handleChange}/>
        <h2 style={styles.listName}>{this.props.params.listId} <ImageEdit style={styles.icon} /></h2>
        <p style={styles.sharedWithText}>Jaettu:
          <span> Elias, Lasse, Susanna <ImageEdit style={styles.icon} /></span> 
        </p>
        <Table filter={this.state.value} />
      </div>
    );
  }
}

List.propTypes = {
  params: React.PropTypes.objectOf(React.PropTypes.string)
};