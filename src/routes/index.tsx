import * as React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../pages/Login';
import WorkoutFrames from '../pages/WorkoutFrames';
import Workouts from '../pages/Workouts';
export class LoggedInRoutes extends React.Component {
  public render() {
    const routes = [
      {
        component: Workouts,
        exact: true,
        path: '/workouts'
      },
      {
        component: WorkoutFrames,
        exact: true,
        path: '/workoutFrames'
      }
    ];
    return (
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    );
  }
}

export const persistantRoutes = () => (
  <Switch>
    <Route component={Login} />
  </Switch>
);

