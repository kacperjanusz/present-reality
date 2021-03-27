import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Game } from '../Pages/Game';
import { InformationPage } from '../Pages/InformationPage';
import { Login } from '../Pages/Login';
import { StartPage } from '../Pages/StartPage/StartPage';
import { Summary } from '../Pages/Summary';
import { AppRoute } from './AppRoute';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Start} exact component={StartPage} />
        <Route path={AppRoute.Login} component={Login} />
        <Route path={AppRoute.InformationPage} component={InformationPage} />
        <Route path={AppRoute.Game} component={Game} />
        <Route path={AppRoute.Summary} component={Summary} />
      </Switch>
    </BrowserRouter>
  );
};
