import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import ContentClear from 'material-ui/svg-icons/content/clear';
import Add from 'material-ui/svg-icons/content/add';
import Remove from 'material-ui/svg-icons/content/remove';

const styles = {
  Table: {
    borderSpacing: 100, 
  },
  tableCellNarrow: {
    width: 28,
  },
  icon: {
    color: '#616161',
  },
  incrementIcons: {
    color: '#424242',
    width: 17,
    height: 17,
  },
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    product: 'Sisuviina',
    numberOfItems: '4',
    sum: '2,90',
  },
  {
    product: 'Kurjala',
    numberOfItems: '24',
    sum: '18,90',
  },
];

export default class TableExampleComplex extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
          style={styles.Table}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Poista" style={styles.tableCellNarrow}>Poista</TableHeaderColumn>
              <TableHeaderColumn tooltip="Tuote">Tuote</TableHeaderColumn>
              <TableHeaderColumn tooltip="Määrä">Määrä</TableHeaderColumn>
              <TableHeaderColumn tooltip="Yht.">Yht.</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
            styles={styles.Table}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn style={styles.tableCellNarrow}><ContentClear style={styles.icon}/></TableRowColumn>
                <TableRowColumn>{row.product}</TableRowColumn>
                <TableRowColumn style={{marginLeft: '2px'}}>{row.numberOfItems}<Add style={styles.incrementIcons} /><Remove style={styles.incrementIcons} /></TableRowColumn>
                <TableRowColumn>{row.sum}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}