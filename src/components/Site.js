import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {connectProfile, logout} from '../auth';
import logo from '../logo.svg';
import './Site.css';
import  AppBarContainer from './AppBar'

class Site extends Component {
  static propTypes = {
    ...connectProfile.PropTypes,
    children: PropTypes.any
  };

  render() {
    return (
      <div className="Site">
        <AppBarContainer profile={this.props} />
        {/*<div className="Site-header">*/}
          {/*this.renderUserControls()*/}
        {/*</div>*/}
        <div className="Site-page">
          {this.props.children}
        </div>
      </div>
    );
  }

  renderUserControls() {
    const {profile} = this.props;

    if (profile) {
      return (
        <div className="Site-profileControls">
          <img className="Site-profilePicture" src={profile.picture} alt={profile.nickname} />
          <Link to="/profile/edit">{profile.nickname}</Link> &middot; <a onClick={() => logout()}>Log Out</a>
        </div>
      );
    } else {
      return (
        <div className="Site-profileControls">
          <span>Guest</span> &middot; <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default connectProfile(Site);