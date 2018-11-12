import { RouterState } from 'connected-react-router';
import { localizeReducer } from 'react-localize-redux';
import { combineReducers } from 'redux';
import { globalReducer, IGlobalReducer } from './global';
import { IRoleReducer } from './role';
import { IthemeReducer, themeReducer } from './theme';
import { IuserReducer, userReducer } from './user';

const rootReducer = combineReducers({
  global: globalReducer,
  localize: localizeReducer,
  theme: themeReducer,
  user: userReducer
});

export interface IActionProps {
  type: string;
  [key: string]: any;
}

export interface IState {
  languageSelection: any;
  router: RouterState;
  role: IRoleReducer,
  theme: IthemeReducer;
  user: IuserReducer;
  global: IGlobalReducer;
}

export default rootReducer;
