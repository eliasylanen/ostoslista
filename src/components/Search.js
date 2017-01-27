import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';

const styles = {
  searchBarContainer: {
    backgroundColor: '#259C8F',
    padding: '5px'
  },  
  searchBar: {
    borderRadius: '5px',
    backgroundColor: 'white',
    borderStyle: 'none',
    borderColor: 'white'
  }
}

const Search = (props) => (
  <div>
    <div style={styles.searchBarContainer}>
      <div style={styles.searchBar}>
        <TextField style={styles.searchBar}
          hintText="Etsi tuotetta"
          hintStyle={{paddingLeft: 10, color: '#616161'}}
          onChange={props.onChange}
          underlineShow={false}
          fullWidth={true}
          inputStyle={{padding: '0 10px', boxSizing: 'border-box'}}
        />
      </div>
    </div>
    <br/>
  </div>
);

export default Search;