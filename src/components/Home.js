// import {Link} from 'react-router';
import './Home.css';

import React, {Component} from 'react';

// import CardContainer from './Card';
import {connectProfile} from '../auth.js';
import Tabs from './Tabs';

class Home extends Component {
  static propTypes = {
    ...connectProfile.PropTypes
  };

  render() {

    return (
      <div className="Home">
        <Tabs />
      </div>
    );
  }
}

export default connectProfile(Home);
