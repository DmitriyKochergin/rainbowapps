import { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import AppPage from 'components/common/AppPage';

interface Props extends RouteProps {
  pageProps?: PageProps
}

const UserOffline: FC<Props> = ({
  component: Component, children, pageProps, ...rest
}) => {

  return (
    <Route
      {...rest}
      render={(props) => (
        <AppPage pageProps={pageProps}>
          {Component ? <Component {...props} /> : children}
        </AppPage>
      )}
    />
  );
};

export default UserOffline;
