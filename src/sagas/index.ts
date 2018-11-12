import { takeLatest } from 'redux-saga/effects';
import RoleConstants from '../actions/role/constants';
import UserConstants from '../actions/user/constants';

import { fetchRoleList } from './role';
import { onFetchUsers, onLoginUser, onLogoutUser } from './user';

export default function* rootSaga() {
  yield takeLatest(UserConstants.FETCH_USERS, onFetchUsers);
  yield takeLatest(UserConstants.LOGIN_USER, onLoginUser);
  yield takeLatest(UserConstants.LOGOUT_USER, onLogoutUser);
  yield takeLatest(RoleConstants.FETCH_ROLE_LIST_REQUEST, fetchRoleList);
}
