import React, { Component } from 'react';

import Button from '../button';
import Icon from '../icon';

class RequstsItem extends Component {

    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item__title'>
                    <div className='requests-item__title__text'>Yo my door fell down</div>
                    <Icon className='requests-item__title__arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='requests-item__tenant-unit'>
                    Max - Unit 115
                </div>

                <div className='requests-item__date'>
                    09/12/93
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('tryna move request item')}/>

                <div className='requests-item__description'>
                  <img
                    className='request-item__description-img'
                    src='http://via.placeholder.com/160x94'
                  />
                  <p className='requests-item__description-text'>
                  An ab quid senserit, iis e fore nisi multos, id sunt fugiat a appellat sed se
                  nulla exquisitaque. Sed aute dolore esse aliquip ne duis incurreret admodum se
                  magna excepteur o despicationes ita iis est concursionibus. Hic cupidatat
                  despicationes, commodo o aute cernantur ad sed offendit quo deserunt id nisi ea
                  cernantur. Nostrud iis cillum te a elit o summis ne nam ubi minim laboris sed ea
                  quae quae velit singulis.Qui quorum consequat. Est o ipsum duis nulla non
                  arbitror tamen multos occaecat veniam si sed nisi deserunt, dolore et si cillum
                  senserit. Pariatur ea legam ne ita ea enim officia si dolore e cupidatat, irure
                  cupidatat quamquam.
                  </p>
                </div>
              </div>
        )
    }
}

export default RequstsItem;
