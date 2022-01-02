/* tslint:disable */
/* eslint-disable */
import { Component, createRef } from 'react';
import Truncate from 'react-truncate';
import PropTypes from 'prop-types';

import './TruncatedName.scss';
import { Popover } from "antd";

class TruncatedName extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    width: PropTypes.number,
    className: PropTypes.string,
    lines: PropTypes.number,
  };

  state = {
    isTruncated: undefined
  };

  ref = createRef();
  interval;


  componentDidMount() {
    this.interval = setInterval(() => {
      this.onResize();
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onResize() {
    // this.setState({isTruncated: false}, () => {
    this.ref.current.onResize();
    // });
  }

  handleTruncate = isTruncated => isTruncated !== this.state.isTruncated && this.setState({ isTruncated });

  renderTruncatedTitle = () => {
    const { title, lines, width, style, className = '' } = this.props;
    return (
      <div className="w-full h-full">
        <Truncate
          ref={this.ref}
          trimWhitespace
          lines={lines}
          width={width}
          style={style}
          className={`truncatedText ${className}`}
          onTruncate={this.handleTruncate}
        >
          {title}
        </Truncate>
      </div>
    );
  };

  render() {
    const { isTruncated } = this.state;
    const { title } = this.props;

    if (!isTruncated) return this.renderTruncatedTitle();

    return (
      <Popover
        placement="top"
        content={title}
        trigger="hover"
        overlayClassName="truncated-name-popup"
        className='truncated-name'
      >
        <div className="w-full h-full">
          {this.renderTruncatedTitle()}
        </div>
      </Popover>
    );
  }
}

export default TruncatedName;
