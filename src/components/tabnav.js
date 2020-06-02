import React, { Component } from 'react';

class TabNav extends Component {
  render() {
    return (
      <div className='tab-nav'>
        <div className='tav-nav__tabs'>
          {
            this.props.tabs.map((tab, index) => {
              return <a className='tab-nav__tab'>{tab.title}</a>
            })
          }
        </div>
        <div>request or newsletters content goes here</div>
      </div>
    )
  }
}

export default TabNav;
