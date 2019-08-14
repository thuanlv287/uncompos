import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { RcomponentLayout } from './r-component';
import { routeRcomponents } from './r-component/contants';
import Rcomponent from './r-component/contants';

const HomePage = () => (
  <React.Fragment>
    <Router>
      <Switch>
        <Route exact path='/' component={RcomponentLayout} />
        {
          routeRcomponents && routeRcomponents.map(route => (
            <Rcomponent
              key={route.path}
              path={route.path}
              Component={route.component}
            />
          ))
        }
        <Route exact path='*' component={() => (<h1>404 Not Found</h1>)} />
      </Switch>
    </Router>
  </React.Fragment>

)

export default HomePage
