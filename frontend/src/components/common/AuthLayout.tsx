import { FC, useRef, useState } from 'react';
import AppContext from 'common/AppContext';
import Header from 'components/common/Header';
import Error from 'components/common/Error';

const AuthLayout: FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const appContainer = useRef<HTMLDivElement | null>(null);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme} absolute inset-0 overflow-hidden`} ref={appContainer}>
        <div className="absolute inset-0 overflow-hidden flex flex-col bg-ivory transition duration-300">
          <Header />

          {children}

          <Error />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default AuthLayout;
