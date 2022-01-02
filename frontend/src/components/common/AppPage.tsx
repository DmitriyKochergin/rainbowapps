import { FC } from 'react';
import AuthLayout from 'components/common/AuthLayout';
import AppPageContext from 'components/common/AppPageContext';

export interface Props {
  pageProps?: PageProps;
}

const AppPage: FC<Props> = ({ pageProps = { title: '' }, children }): JSX.Element | null => (
  <AppPageContext.Provider value={pageProps}>
    <AuthLayout>
      {children}
    </AuthLayout>
  </AppPageContext.Provider>
);

export default AppPage;
