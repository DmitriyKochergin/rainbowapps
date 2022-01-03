import { FC } from 'react';
import ReactSwipe from 'react-swipe';

import './ForKids.scss';

const descriptions = [
  ['banana', 'БАНАН'],
  ['strawberry', 'КЛУБНИКА'],
  ['kiwi', 'КИВИ'],
  ['peach', 'ПЕРСИК'],
  ['orange', 'АПЕЛЬСИН'],
  ['pear', 'ГРУША'],
  ['lemon', 'ЛИМОН'],
  ['plum', 'СЛИВА'],
  ['apple', 'ЯБЛОКО'],
  ['pineapple', 'АНАНАС'],
  ['cherry', 'ВИШНЯ'],
  ['pomegranate', 'ГРАНАТ'],
];

const ForKids: FC = (): JSX.Element => {

  let reactSwipeEl: ReactSwipe;
  // preload audio
  new Audio(process.env.PUBLIC_URL + '/audio/ES_Arcade Game Tap 1.mp3');

  return (
    <div className='p-10'>
      <div>
        <ReactSwipe
          className={'carousel'}
          swipeOptions={{ continuous: true }}
          ref={(el: ReactSwipe) => (reactSwipeEl = el)}
        >
          {descriptions.map((description) => {
            return (<div key={description[1]}>
              <div className={'item flex flex-col'}>
                <div className={'description'}>
                  {description[1]}
                </div>
                <img className={'image'} src={process.env.PUBLIC_URL + '/images/fruits/' + description[0] + '.jpg'}/>
              </div>
            </div>);
          })}
        </ReactSwipe>
        <div className={'carousel-buttons flex flex-row justify-between'}>
          <div className={'carousel-button'} onClick={() => {
            reactSwipeEl.prev();
            const audio = new Audio(process.env.PUBLIC_URL + '/audio/ES_Arcade Game Tap 1.mp3');
            audio.addEventListener('canplaythrough', event => {
              void audio.play();
            });
          }}> &lt;&lt; </div>
          <div className={'carousel-button'} onClick={() => {
            reactSwipeEl.next();
            const audio = new Audio(process.env.PUBLIC_URL + '/audio/ES_Arcade Game Tap 1.mp3');
            audio.addEventListener('canplaythrough', event => {
              void audio.play();
            });
          }}> &gt;&gt; </div>
        </div>
      </div>
    </div>
  );
};

export default ForKids;
