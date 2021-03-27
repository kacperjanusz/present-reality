import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Game } from '../Pages/Game';
import { InformationPage } from '../Pages/InformationPage/InformationPage';
import { Login } from '../Pages/Login/Login';
import { StartPage } from '../Pages/StartPage/StartPage';
import { Summary } from '../Pages/Summary';
import { AppRoute } from './AppRoute';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Login} component={Login} />
        <Route path={AppRoute.Information} component={InformationPage} />
        <Route path={AppRoute.Game} component={Game} />
        <Route path={AppRoute.Summary} component={Summary} />
        <Route path={AppRoute.Start} component={StartPage} />
      </Switch>
    </BrowserRouter>
  );
};
