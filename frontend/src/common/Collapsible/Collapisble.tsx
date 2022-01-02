import { FC, useRef } from 'react';
import './Collapsible.scss';

export interface CollapsibleProps {
  collapsed: boolean;
}

const Collapsible: FC<CollapsibleProps> = ({ collapsed, children }): JSX.Element => {
  const element = useRef<HTMLDivElement>(null);

  const scrollHeight = element?.current?.scrollHeight;
  return (
    <div ref={element} className="collapsible"
         style={{ overflow: 'hidden', maxHeight: collapsed ? 0 : scrollHeight }}>
      {children}
    </div>
  );
};

Collapsible.defaultProps = {
  collapsed: false,
};

export default Collapsible;
