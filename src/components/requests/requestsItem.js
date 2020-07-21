import React, { Component } from 'react';

import Button from '../button';
import Icon from '../icon';

import AnimateHeight from 'react-animate-height';

import { ROOT_URL } from '../../config';

class RequstsItem extends Component {

  constructor() {
    super()

    this.state = {
      height: 0
    }
  }

  toggleDropdown = () => {
    var element = document.getElementById('request-item');
    if(this.state.height == 0) {
      element.classList.add('bg-F8');
      this.setState({height: 'auto'})
    } else {
      element.classList.remove('bg-F8');
      this.setState({height: 0})
    }
  }
    render() {
          const { _id, body, title, date, imageURL, status } = this.props;
          const parsedDate = new Date(date);
            <div id='request-item' className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item__title'>
                    <div className='requests-item__title__text'>{title}</div>
                    <Icon callback={() => this.toggleDropdown()} className='requests-item__title__arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='requests-item__tenant-unit'>
                    Max - Unit 115
                </div>

                <div className='requests-item__date'>
                  { parsedDate.getMonth() + 1}
                  /
                  { parsedDate.getDate() }
                  /
                  { parsedDate.getFullYear() - 2000 }
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('tryna move request item')}/>

                <div className='requests-item__description'>
                  <AnimateHeight
                    duration={300}
                    height={this.state.height}
                  >
                    <div className='item-description'>
                      <img
                        className='item-description__img'
                        src={`${ROOT_URL}/${imageUrl}`}
                      />
                      <p className='item-description__text'>
                        {body}
                      </p>
                    </div>
                  </AnimateHeight>
                </div>

              </div>
    }
}

export default RequstsItem;
