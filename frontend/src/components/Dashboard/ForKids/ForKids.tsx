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
        <div className={'ml-10'}>
          <div style={{ display: 'inline-block', padding: '10px', border: '1px solid #555' }}
               onClick={() => reactSwipeEl.prev()}>Previous
          </div>
          <div style={{ display: 'inline-block', padding: '10px', border: '1px solid #555' }}
               onClick={() => reactSwipeEl.next()}>Next
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForKids;
