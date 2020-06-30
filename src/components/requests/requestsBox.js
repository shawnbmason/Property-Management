import React, { Component } from 'react';

class RequestBox extends Component {
  render() {
    const { count, title } = this.props;
      return (
        <a onClick={() => console.log('Trying to run') } className='requests-box requests-box-inactive'>
          <div className='requests-box__count'>{count}</div>
          <div className='requests-box__title'>{title}</div>
          <div className='requests-box__point'></div>
        </a>
      )
    }
  }

export default RequestBox;
