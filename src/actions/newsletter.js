import {
    SET_NEWSLETTERS,
    FETCH_NEWSLETTER_ID
} from './types';

export function fetchNewsletters() {
  const response = {
    data: [
      {
        _id: '1564',
        title: 'Happy Holidays Fam',
        body: 'In my junior year of high school, this guy asked me on a date. He rented a Redbox movie and made a pizza. We were watching the movie and the oven beeped so the pizza was done. He looked me dead in the eye and said, “This is the worst part.” I then watched this boy open the oven and pull the pizza out with his bare hands, rack and all, screaming at the top of his lungs. We never had a second date.',
        date: new Date(),
        imageUrl: 'http://via.placeholder.com/960x250'
      },
      {
        _id: '2546',
        title: 'Seconds Newsletter',
        body: 'I failed the first quarter of a class in middle school, so I made a fake report card. I did this every quarter that year. I forgot that they mail home the end-of-year cards, and my mom got it before I could intercept with my fake. She was PISSED—at the school for their error. The teacher also retired that year and had already thrown out his records, so they had to take my mother’s “proof” (the fake ones I made throughout the year) and “correct” the “mistake.” I’ve never told her the truth.',
        date: new Date(),
        imageUrl: 'http://via.placeholder.com/960x250'
      }
    ]
  }

  return {
    type: SET_NEWSLETTERS,
    payload: response.data
  }
}

export function fetchNewslettersWithId(id) {
  return {
    type: FETCH_NEWSLETTER_ID,
    payload: id
  }
}
