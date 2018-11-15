import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import logo from '../../../src/assets/img/boy.svg';
import { changeTheme } from '../../actions/theme';
// import { logoutUser } from '../../actions/user';
import { IState } from '../../reducers';
import { themes } from '../../themes';

import './NavBar.css';

interface INavState {
  availableThemes: any[];
  openSideNav: boolean;
}

interface INavProps extends LocalizeContextProps, IStateProps, IDispatchProps {
  classes: any;
}

class NavBar extends React.Component<INavProps, INavState> {
  // private static loadStyleSheet(theme: string) {
  //   const styleSheets = document.querySelectorAll('link[rel=stylesheet]');
  //   styleSheets.forEach((styleSheet: any) => {
  //     if (styleSheet.parentNode && !styleSheet.sheet.href.includes('chunk')) {
  //       styleSheet.parentNode.removeChild(styleSheet);
  //     }
  //   });
  //   const sheet = document.createElement('link');
  //   sheet.rel = 'stylesheet';
  //   sheet.href = `./static/css/${theme}.css`;
  //   sheet.type = 'text/css';
  //   if (document.head) { document.head.appendChild(sheet); }
  // }
  // private userMenu: any[];

  constructor(props: INavProps) {
    super(props);
    this.state = {
      availableThemes: Object.keys(themes).map(key => {
        themes[key].code = key;
        return themes[key];
      }),
      openSideNav: false
    };
    // this.userMenu = [
    //   {
    //     name: 'Logout',
    //     onClick: () => this.props.logoutUser()
    //   }
    // ];
  }

  public render() {
    // const { activeLanguage, activeTheme, languages } = this.props;
    // const { availableThemes } = this.state;
    return (
      <div className="navbar-container">
        <Navbar collapseOnSelect={true} fixedTop={true} fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <div className="t">
              <img className="logo" src={logo} />
              <div className="t r">
              <span>
                Arshad
              </span>
              <h5>Super Admin</h5>
              </div>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }

  // private handleLangSelection = (code: string) => {
  //   this.props.setActiveLanguage(code);
  // }

  // private handleThemeSelection = (theme: string) => {
  //   NavBar.loadStyleSheet(theme);
  // }
}

interface IStateProps {
  activeTheme: string;
}

interface IDispatchProps {
  // logoutUser(): void;
  setActiveTheme(theme: string): void;
}

const mapStateToProps = (state: IState) => ({
  activeTheme: state.theme.activeTheme
});

const mapDispatchToProps = (dispatch: any) => ({
  // logoutUser: () => dispatch(logoutUser()),
  setActiveTheme: (theme: string) => dispatch(changeTheme(theme))
});

export default compose(
  withRouter,
  connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(NavBar);
