import { FC } from 'react';
import './GooeyButton.scss';
import { isTouch } from '../utils/commonUtils';

export interface GooeyButtonProps {
  onClick: () => void;
  deviation?: number;
  text: string;
}

const GooeyButton: FC<GooeyButtonProps> = ({ onClick, deviation, text }): JSX.Element => {
  return (
    <div className='gooey-button-wrapper'>
      <svg id="gooey-button-svg-filter-blur" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation={deviation} result="blur"/>
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                           result="highContrastGraphic"/>
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop"/>
          </filter>
        </defs>
      </svg>

      <button className="gooey-button"
              onMouseDown={isTouch ? () => {
              } : onClick}
              onTouchStart={onClick}>
        {text}
        <span className="bubbles">
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
                <span className="bubble"/>
              </span>
      </button>

    </div>
  );
};

GooeyButton.defaultProps = {
  deviation: 6,
};

export default GooeyButton;
