import { FC, useEffect, useState } from 'react';
import ReactSwipe from 'react-swipe';

import './ForKids.scss';
import { useIntl } from 'react-intl';
import { Icon } from '@iconify/react';
import { play } from './audio/Audios';
import Ripple from '../../../common/ripple/Ripple';
import { isTouch } from '../../../common/utils/commonUtils';

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

let reactSwipeEl: ReactSwipe;
let interval: NodeJS.Timer;

const ForKids: FC = (): JSX.Element => {

  const intl = useIntl();

  const [autoplay, setAutoplay] = useState<boolean>(true);


  useEffect(() => {
    if (autoplay) {
      setTimeout(() => {
        reactSwipeEl.next();
      }, 1000);
      interval = setInterval(() => {
        reactSwipeEl.next();
      }, 3000);
    } else {
      clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className='p-10'>
      <div>
        <ReactSwipe
          className={'carousel'}
          swipeOptions={{ continuous: true }}
          ref={(el: ReactSwipe) => {
            reactSwipeEl = el;
          }}

        >
          {fruits.map((description) => {
            return (<div key={description}
                         onMouseDown={
                           isTouch ? () => {
                           } : () => {
                             setAutoplay(false);
                           }}
                         onTouchStart={() => {
                           setAutoplay(false);
                         }}>
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

          <div className={'carousel-button'}
               onMouseDown={
                 isTouch ? () => {
                 } : () => {
                   setAutoplay(false);
                   reactSwipeEl.prev();
                   play('tap');
                 }}
               onTouchStart={() => {
                 setAutoplay(false);
                 reactSwipeEl.prev();
                 play('tap');
               }
               }>
            <
              Ripple
              className='carousel-button-ripple'>
              < Icon
                icon="clarity:rewind-solid"
                className={'icon'}
              />
            </Ripple>
          </div>

          <div className={'carousel-button'}
               onMouseDown={
                 isTouch ? () => {
                 } : () => {
                   setAutoplay(!autoplay);
                   play('tap');
                 }}
               onTouchStart={() => {
                 setAutoplay(!autoplay);
                 play('tap');
               }}>
            <Ripple className='carousel-button-ripple'>
              {autoplay ?
                <Icon icon="clarity:pause-solid" className={'icon'}/>
                : <Icon icon="clarity:play-solid" className={'icon'}/>
              }
            </Ripple>
          </div>

          <div className={'carousel-button'}
               onMouseDown={
                 isTouch ? () => {
                 } : () => {
                   setAutoplay(false);
                   reactSwipeEl.next();
                   play('tap');
                 }}
               onTouchStart={() => {
                 setAutoplay(false);
                 reactSwipeEl.next();
                 play('tap');
               }}>
            <Ripple className='carousel-button-ripple'>
              <Icon icon="clarity:fast-forward-solid" className={'icon'}/>
            </Ripple>
          </div>

        </div>
      </div>
    </div>
  )
  ;
};

export default ForKids;
