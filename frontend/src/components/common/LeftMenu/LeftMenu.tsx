import { FC, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { FormattedMessage, useIntl } from 'react-intl';
import { Drawer } from 'antd';
import { Icon } from '@iconify/react';
import closeOutline from '@iconify-icons/eva/close-outline';
import menuOutline from '@iconify-icons/eva/menu-outline';
import { isTouch } from '../../../common/utils/commonUtils';

const LeftMenu: FC = (): JSX.Element => {
  const intl = useIntl();
  const { pathname: curPath } = useLocation();
  const [visible, setVisible] = useState(false);
  const history = useHistory();

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
      <div onMouseDown={isTouch ? () => {} : onToggle} onTouchStart={onToggle} className="menu-button cursor-pointer select-none">
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
            <sup> ©</sup>

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
                     onMouseDown={isTouch ? () => {} : () => onClick(path)}
                     onTouchStart={() => onClick(path)}
                >
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
