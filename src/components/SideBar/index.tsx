import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { BaseIcon } from '../index';

import './SideBar.css';

class SideBar extends React.Component {

  public render() {
    return (
      <div key="sidebar" className="sidebar">
        <NavLink
          exact={true}
          to="/"
          activeClassName="active"
          className="nav-link">
          <BaseIcon name="Home" label="Home" />
        </NavLink>
          <NavLink
          exact={true}
          to="/formschemalist"
          activeClassName="active"
          className="nav-link">
          <BaseIcon name="Layers" label="Schemas" />
        </NavLink>
      </div>
    );
  }
}

export default SideBar;
