import React, { Component } from 'react';

import RequstsItem from './requestsItem';

class Requests extends Component {
  render() {
    return (
      <div className='requests'>
          <RequstsItem/>
          <RequstsItem/>
          <RequstsItem/>
      </div>
    )
  }
}

export default Requests;
