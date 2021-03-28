import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Game } from '../Pages/Game';
import { InformationPage } from '../Pages/InformationPage/InformationPage';
import { Login } from '../Pages/Login/Login';
import { StartPage } from '../Pages/StartPage/StartPage';
import { Summary } from '../Pages/Summary/Summary';
import { AnswearsPage } from '../Pages/AnswearsPage/AnswearsPage';
import { AppRoute } from './AppRoute';
import { Result } from '../Pages/Result/Result';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <TransitionGroup>
        <CSSTransition classNames="fade" timeout={600}>
          <Switch>
            <Route path={AppRoute.Login} component={Login} />
            <Route path={AppRoute.Information} component={InformationPage} />
            <Route path={AppRoute.Game} component={Game} />
            <Route path={AppRoute.Summary} component={Summary} />
            <Route path={AppRoute.Answers} component={AnswearsPage} />
            <Route path={'/result'} component={Result} />
            <Route path={AppRoute.Start} component={StartPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </BrowserRouter>
  );
};
