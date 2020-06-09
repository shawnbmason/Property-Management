import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
  render() {

    const latest = {
      _id: '1564',
      title: 'Happy Holidays Fam',
      body: 'In my junior year of high school, this guy asked me on a date. He rented a Redbox movie and made a pizza. We were watching the movie and the oven beeped so the pizza was done. He looked me dead in the eye and said, “This is the worst part.” I then watched this boy open the oven and pull the pizza out with his bare hands, rack and all, screaming at the top of his lungs. We never had a second date.',
      date: new Date(),
      imageUrl: 'http://via.placeholder.com/960x250'
    }

    return (
      <div className='newsletter-grid'>
        {/* add button */}
        <NewsletterBox date={new Date()}/>
        <NewsletterArchive/>
        <NewsletterLatest {...latest}/>
      </div>
    )
  }
}

export default NewsletterGrid;
