import React, { Component } from 'react';

function ArchiveItem({title, date}) {
  return (
    <div className='archive-items__item'>
      <div className='archive-item__title'>{title}</div>
      <div className='archive-item__date'>{date}</div>
        { date.getMonth() + 1}
        /
        { date.getDate() }
        /
        { date.getFullYear() - 2000 }
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
          <ArchiveItem title='Happy Holidays!' date={new Date()}/>
          <ArchiveItem title='Season of Thanksgiving' date={new Date()}/>
          <ArchiveItem title='Spooky Business' date={new Date()}/>
          <ArchiveItem title='Fall-Time Changes' date={new Date()}/>
          <ArchiveItem title='Summers End' date={new Date()}/>
        </div>
      </div>
    )
  }
}

export default NewsletterArchive;
