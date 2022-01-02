import { FC, useContext } from 'react';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';
import { Layout, Switch } from 'antd';
import LeftMenu from 'components/common/LeftMenu';
import AppContext from 'common/AppContext';
import AppPageContext from 'components/common/AppPageContext';

const Header: FC = (): JSX.Element => {
  const { theme, setTheme } = useContext(AppContext);
  const { title: moduleHeader } = useContext(AppPageContext);

  const { Header: HeaderLayout } = Layout;

  const change = () => {
    setTheme((t: 'light' | 'dark'): 'light' | 'dark' => (t === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
        <HeaderLayout className="shadow-lg flex items-center">
          { <LeftMenu /> }
          <div className={clsx('flex flex-col pt-10 pb-10')}>
            <span className={clsx('text-sm')}>
              <FormattedMessage
                id="Rainbow apps"
                defaultMessage="Rainbow apps"
              />
            </span>
            <span className="text-lg font-bold leading-10">{moduleHeader}</span>
          </div>
          <div className="flex items-center hidden">
            <span
              className={clsx('pr-14 t text-white opacity-75 hover:opacity-100',
                'cursor-pointer transition duration-300 font-light')}
            >
              Dark theme
            </span>
            <Switch checked={theme === 'dark'} onChange={change} />
          </div>
        </HeaderLayout>
    </>
  );
};

export default Header;
