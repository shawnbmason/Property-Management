import React, { Component } from 'react';

function ArchiveItem({title, date}) {
  return (
    <div className='archive-items__item'>
      <div className='archive-item__title'>{title}</div>
      <div className='archive-item__date'>{date}</div>
    </div>
  )
}

class NewsletterArchive extends Component {
  render() {
    return (
      <div className='newsletter-archive'>
        <div className='newsletter-archive__title'>Archive</div>
        <div className='newsletter-archive__items archive-items'>
          {/*newsletter items*/}
          <ArchiveItem title='Happy Holidays!' date='09/15/2040'/>
          <ArchiveItem title='Season of Thanksgiving' date='09/15/2040'/>
          <ArchiveItem title='Spooky Business' date='09/15/2040'/>
          <ArchiveItem title='Fall-Time Changes' date='09/15/2040'/>
          <ArchiveItem title='Summers End' date='09/15/2040'/>
        </div>
      </div>
    )
  }
}

export default NewsletterArchive;
