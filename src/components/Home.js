// import {Link} from 'react-router';
import './Home.css';

import React, {Component} from 'react';

// import CardContainer from './Card';
import TabsContainer from './Tabs';
import {connectProfile} from '../auth';

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
        <TabsContainer />
      </div>
    );
  }
}

export default connectProfile(Home);
