import { FC, useEffect, useState } from 'react';
import ReactSwipe from 'react-swipe';

import './ForKids.scss';
import { useIntl } from 'react-intl';
import { Icon } from '@iconify/react';
import { play } from './common/AudiosCache';
import Ripple from '../../../common/ripple/Ripple';
import { isTouch } from '../../../common/utils/commonUtils';
import { CardSetCache } from './common/CardSets';
import GooeyButton from '../../../common/GooeyButton/GooeyButton';

let reactSwipeEl: ReactSwipe;
let interval: NodeJS.Timer | undefined;

const ForKids: FC = (): JSX.Element => {

  const intl = useIntl();

  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [currentSet, setCurrentSet] = useState<string | undefined>(undefined);

  const sendEmail = () => {
    window.location.href = 'mailto:dimakoch@ukr.net?subject=ForKids application';
  };

  useEffect(() => {
    if (currentSet !== undefined) {
      if (autoplay) {
        setTimeout(() => {
          reactSwipeEl.next();
        }, 1000);
        interval = setInterval(() => {
          reactSwipeEl.next();
        }, 3000);
      } else {
        if (interval !== undefined) {
          clearInterval(interval);
          interval = undefined;
        }
      }

      return () => {
        if (interval !== undefined) {
          clearInterval(interval);
          interval = undefined;
        }
      };
    } else {
      if (interval !== undefined) {
        clearInterval(interval);
        interval = undefined;
      }
    }
  }, [autoplay, currentSet]);

  return (
    <div className='p-10'>
      {currentSet === undefined && <div className={'flex flex-row flex-flow'}>
        {Object.keys(CardSetCache).map((card) => {
          return <div key={card}
                      className={'flex flex-col card'}
                      onMouseDown={
                        isTouch ? () => {
                        } : () => {
                          setCurrentSet(card);
                        }}
                      onTouchStart={() => {
                        setCurrentSet(card);
                      }}>
            <div className={'card-image'}>
              <img className={'image'}
                   src={process.env.PUBLIC_URL + '/images/' + card + '/' + CardSetCache[card][0] + '.jpg'}/>
            </div>
            <div className={'card-name p-10 flex justify-center'}>{intl.formatMessage({ id: card })}</div>
          </div>;
        })}

        <div className={'absolute w-full bottom-0 left-0 p-10 bottom-panel'}>
          <GooeyButton onClick={sendEmail} text={intl.formatMessage({ id: 'feedback' })}/>
        </div>
      </div>}
      {currentSet !== undefined && <>
        <ReactSwipe
          className={'carousel'}
          swipeOptions={{
            continuous: true, startSlide: currentSlide, callback: (index: number) => {
              setCurrentSlide(index);
              play(currentSet + '/' + CardSetCache[currentSet][index], 200);
            },
          }}
          ref={(el: ReactSwipe) => {
            reactSwipeEl = el;
          }}
        >
          {CardSetCache[currentSet].map((card: string) => {
            return (<div key={card}
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
                  {intl.formatMessage({ id: card })}
                </div>
                <img className={'image'} src={process.env.PUBLIC_URL + '/images/' + currentSet + '/' + card + '.jpg'}/>
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
            <Ripple className='carousel-button-ripple'>
              <Icon icon="clarity:rewind-solid" className={'icon'}/>
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
      </>}
    </div>
  );
};

export default ForKids;
