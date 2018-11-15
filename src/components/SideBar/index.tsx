import * as React from 'react';
// import { BaseIcon } from '../index';
// import { withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { logoutUser } from '../../actions/user';

import './SideBar.css';

interface ISideBarProps extends IDispatchProps {
  classes: any;
}
class SideBar extends React.Component<ISideBarProps> {

  public logout = () => {
    this.props.logoutUser();
  }

  public render() {
    return (
      <div key="sidebar" className="sidebar">
        <NavLink
          exact={true}
          to="/workouts"
          activeClassName="active"
          className="nav-link">
          Workouts
        </NavLink>
        <NavLink
          exact={true}
          to="/workoutFrames"
          activeClassName="active"
          className="nav-link">
          Workout Frames
        </NavLink>
        <NavLink
          exact={true}
          to="/simulator"
          activeClassName="active"
          className="nav-link">
          Preview Simulator
        </NavLink>
        <NavLink
          exact={true}
          to="/textLibrary"
          activeClassName="active"
          className="nav-link">
          Text Library
        </NavLink>
        <NavLink
          exact={true}
          to="/soundLibrary"
          activeClassName="active"
          className="nav-link">
          Sound Library
        </NavLink>
        <NavLink
          exact={true}
          to="/logoLibrary"
          activeClassName="active"
          className="nav-link">
          Logo Library
        </NavLink>
        <NavLink
          exact={true}
          to="/myAccount"
          activeClassName="active"
          className="nav-link">
          My Account
        </NavLink>
        <NavLink
          exact={true}
          to="/logout"
          onClick={() => this.logout()}
          activeClassName="active"
          className="nav-link">
          Logout
        </NavLink>
      </div>
    );
  }
}

interface IDispatchProps {
  logoutUser(): void;
}

const mapDispatchToProps = (dispatch: any) => ({
  logoutUser: () => dispatch(logoutUser())
});

export default compose(
  withRouter,
  connect<IDispatchProps>(
    mapDispatchToProps
  )
)(SideBar);
