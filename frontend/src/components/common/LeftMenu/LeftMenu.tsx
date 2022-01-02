import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { FormattedMessage, useIntl } from 'react-intl';
import { Drawer } from 'antd';
import { Icon } from '@iconify/react';
import closeOutline from '@iconify-icons/eva/close-outline';
import menuOutline from '@iconify-icons/eva/menu-outline';
import history from 'common/utils/historyUtils';

const LeftMenu: FC = (): JSX.Element => {
  const intl = useIntl();
  const { pathname: curPath } = useLocation();
  const [visible, setVisible] = useState(false);

  const navModulesList: NavModulesList[] = [
    {
      navId: 0,
      label: intl.formatMessage({ id: 'forkids', defaultMessage: 'For Kids' }),
      path: '/forkids',
    },
    {
      navId: 1,
      label: intl.formatMessage({ id: 'crocodile', defaultMessage: 'Crocodile' }),
      path: '/crocodile',
    },
  ];

  const onClose = () => {
    setVisible(false);
  };

  const onToggle = () => {
    setVisible(!visible);
  };

  const onClick = (path: string) => {
    history.push(path);
    onClose();
  };

  return (
    <>
      <div onMouseDown={onToggle} className="menu-button cursor-pointer select-none">
        <Icon icon={menuOutline} width={32} height={32}/>
      </div>
      <Drawer
        className="left-menu"
        title={(
          <span
            className="text-xl text-black font-bold"
          >
            <FormattedMessage
              id="Modules"
              defaultMessage="Modules"
            />
          </span>
        )}
        placement="left"
        onClose={onClose}
        visible={visible}
        closeIcon={<Icon icon={closeOutline} width={22} height={22}/>}
        bodyStyle={{
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
        }}
        width={320}
      >
        {
          navModulesList.map(({ navId, label, path }) => {
            const isActiveMenuItem = curPath.startsWith(path) || (curPath === '/' && navId === 0);
            return (
              <div key={navId} className="cursor-pointer">
                <div className={clsx('text-base menu-item', isActiveMenuItem && 'active')}
                     onMouseDown={() => onClick(path)}>
                  {label}
                </div>
              </div>
            );
          })
        }
      </Drawer>
    </>
  );
};

export default LeftMenu;
