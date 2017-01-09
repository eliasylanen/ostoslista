import React, {Component} from 'react';
import {connectProfile} from '../auth';
// import {Link} from 'react-router';
import './Home.css';
// import CardContainer from './Card';
import TabsExampleSimple from './Tabs';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    return (
      <div className="Home">
        <div className="Home-intro">
          <h2>Welcome to ViinaralliÄpp :-D</h2>
        </div>
        <TabsExampleSimple />
      </div>
    );
  }
}

export default Home;
