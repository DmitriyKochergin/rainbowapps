import { FC, useEffect, useState } from 'react';
import ReactSwipe from 'react-swipe';

import './ForKids.scss';
import { useIntl } from 'react-intl';
import { Icon } from '@iconify/react';
import { play } from './audio/AudiosCache';
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
  const [currentSlide, setCurrentSlide] = useState<number>(0);

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
    return () => {
      clearInterval(interval);
    };
  }, [autoplay]);

  return (
    <div className='p-10'>
      <div>
        <ReactSwipe
          className={'carousel'}
          swipeOptions={{ continuous: true, startSlide: currentSlide, callback: (index: number) => {setCurrentSlide(index); play('fruits/' + fruits[index]);} }}
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
                   play('click/click');
                 }}
               onTouchStart={() => {
                 setAutoplay(false);
                 reactSwipeEl.prev();
                 play('click/click');
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
                   play('click/click');
                 }}
               onTouchStart={() => {
                 setAutoplay(!autoplay);
                 play('click/click');
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
                   play('click/click');
                 }}
               onTouchStart={() => {
                 setAutoplay(false);
                 reactSwipeEl.next();
                 play('click/click');
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
