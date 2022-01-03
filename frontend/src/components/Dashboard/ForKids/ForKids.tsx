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

  return (
    <div className='p-10'>
      <div>
        <ReactSwipe
          className={'carousel'}
          swipeOptions={{ continuous: true }}
          ref={(el: ReactSwipe) => (reactSwipeEl = el)}
        >
          {descriptions.map((description) => {
            return (<div>
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
          <div className={'carousel-button'} onClick={() => reactSwipeEl.prev()}> &lt;&lt; </div>
          <div className={'carousel-button'} onClick={() => reactSwipeEl.next()}> &gt;&gt; </div>
        </div>
      </div>
    </div>
  );
};

export default ForKids;
