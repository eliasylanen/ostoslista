import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
// Onko tää ok
import Card from './Card';
import './Container.css';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <div className="Container">         
          <Tabs
            onChange={this.handleChange}
            value={this.state.slideIndex}
          >
            <Tab label="Omat listat" value={0} />
            <Tab label="Vastaanotetut listat" value={1} />
          </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.headline}>Omat listat</h2>
            <Card />
          </div>
          <div style={styles.slide}>
            <h2 style={styles.headline}>Vastaanotetut listat</h2>
            <Card />
          </div>
        </SwipeableViews>
        </div>
      </div>
    );
  }
}
