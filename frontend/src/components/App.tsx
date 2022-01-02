import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import UserOnline from './routes/Private/UserOnline';
import ForKids from './Dashboard/ForKids/ForKids';
import Crocodile from './Dashboard/Crocodile/Crocodile';
import { useIntl } from 'react-intl';

const App: FC = (): JSX.Element => {
  const intl = useIntl();

  return (
        <Switch>
            <UserOnline exact path="/">
                <Redirect to="/forkids"/>
            </UserOnline>
            <UserOnline path="/forkids" component={ForKids}
                        pageProps={{ title: intl.formatMessage({ id: 'forkids', defaultMessage: 'For Kids' }) }}/>
            <UserOnline path="/crocodile" component={Crocodile}
                        pageProps={{ title: intl.formatMessage({ id: 'crocodile', defaultMessage: 'Crocodile' }) }}/>

            {/*MUST BE THE LAST ROUTE*/}
            <Route exact path="*">
                <Redirect to="/forkids"/>
            </Route>
        </Switch>
  );
};
export default App;
