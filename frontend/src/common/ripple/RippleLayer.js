/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './RippleLayer.css';

class RippleLayer extends React.Component {
  static propTypes = {
    cursorPos: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
      time: PropTypes.number,
    }),
  };

  static defaultProps = {
    cursorPos: {},
  };

  state = {
    animate: false,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  };

  ripple = React.createRef();

  componentDidUpdate(prevProps) {
    const cursorPos = this.props.cursorPos;

    // Prevent Component duplicates do ripple effect at the same time
    if (cursorPos.time !== prevProps.cursorPos.time) {
      // If Has Animated, set state to "false" First
      if (!this.state.animate) {
        this.reppling(cursorPos);
        return;
      }

      // do rippling
      this.setState({ animate: false }, () => this.reppling(cursorPos));
    }
  }

  px = val => `${val}px`;

  getStyles = () => {
    const { top, left, width, height } = this.state;

    return {
      top: this.px(top),
      left: this.px(left),
      width: this.px(width),
      height: this.px(height),
    };
  };

  getRepplingCls = () => {
    return this.state.animate ? 'is-reppling' : '';
  };

  reppling = cursorPos => {
    // Get the element
    const $ripple = this.ripple.current;
    const $button = $ripple.parentElement;

    const buttonPos = $button.getBoundingClientRect();

    const buttonWidth = $button.offsetWidth;
    const buttonHeight = $button.offsetHeight;

    // Make a Square Ripple
    const rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);

    // Make Ripple Position to be center
    const centerize = rippleWidthShouldBe / 2;

    this.setState({
      animate: true,
      width: rippleWidthShouldBe,
      height: rippleWidthShouldBe,
      top: cursorPos.top - buttonPos.top - centerize,
      left: cursorPos.left - buttonPos.left - centerize,
    });
  };

  render() {
    return <div
      className={`Ripple ${this.getRepplingCls()}`}
      ref={this.ripple}
      style={this.getStyles()}/>;
  }
}

export default RippleLayer;
