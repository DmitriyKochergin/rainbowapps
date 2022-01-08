/* eslint-disable */
import React, { Component } from 'react';
import RippleLayer from './RippleLayer';
import PropTypes from 'prop-types';
import clsx from 'clsx';

class Ripple extends Component {
  static propTypes = {
    ExtComponent: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    disabled: false,
  };

  state = {
    cursorPos: {},
  };

  handleClick = e => {
    if (!this.props.disabled && e.touches) {
      const cursorPos = {
        top: e.touches[0].clientY,
        left: e.touches[0].clientX,
        time: Date.now(),
      };

      this.setState({ cursorPos });
    }
  };

  render() {
    const { children, className } = this.props;

    return (
      <div
        {...this.props}
        className={clsx('relative overflow-hidden flex-1 flex', className)}
        onTouchStart={this.handleClick}
      >
        {children}
        <RippleLayer cursorPos={this.state.cursorPos}/>
      </div>
    );
  }
}

export default Ripple;
