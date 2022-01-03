import { FC } from 'react';
import ReactSwipe from 'react-swipe';

import './ForKids.scss';
import { useIntl } from 'react-intl';
import { Icon } from '@iconify/react';
import { play } from './audio/Audios';

const fruits = [
  'banana',
  'strawberry',
  'kiwi',
  'peach',
  'orange',
  'pear',
  'lemon',
  'plum',
  'apple',
  'pineapple',
  'cherry',
  'pomegranate',
];

const ForKids: FC = (): JSX.Element => {

  const intl = useIntl();
  let reactSwipeEl: ReactSwipe;

  return (
    <div className='p-10'>
      <div>
        <ReactSwipe
          className={'carousel'}
          swipeOptions={{ continuous: true }}
          ref={(el: ReactSwipe) => (reactSwipeEl = el)}
        >
          {fruits.map((description) => {
            return (<div key={description}>
              <div className={'item flex flex-col'}>
                <div className={'description'}>
                  {intl.formatMessage({ id: description })}
                </div>
                <img className={'image'} src={process.env.PUBLIC_URL + '/images/fruits/' + description + '.jpg'}/>
              </div>
            </div>);
          })}
        </ReactSwipe>
        <div className={'carousel-buttons flex flex-row justify-between'}>
          <div className={'carousel-button'} onTouchStart={() => {
            reactSwipeEl.prev();
            play('tap');
          }}> <Icon icon="clarity:rewind-solid" /> </div>
          <div className={'carousel-button'} onTouchStart={() => {

            play('tap');
          }}> <Icon icon="clarity:play-solid" /> </div>
          <div className={'carousel-button'} onTouchStart={() => {
            reactSwipeEl.next();
            play('tap');
          }}> <Icon icon="clarity:fast-forward-solid" /> </div>
        </div>
      </div>
    </div>
  );
};

export default ForKids;
