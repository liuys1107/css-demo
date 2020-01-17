import React from 'react';
import PropTypes from 'prop-types';
import {
  routerRedux,
  Route,
  Switch
} from 'dva/router';
import Home from './home';
import './index.less';

const {ConnectedRouter} = routerRedux;

export default function Router({history}) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object
};
