import {
    SET_NEWSLETTERS
} from '../actions/types';

const INITIAL_STATE = {
    newsletters: [],
    newsletterToEdit: {}
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTERS:
            const newsletters = action.payload;
            return {
                ...state,
                newsletters
            }
        case FETCH_NEWSLETTER_ID:
          const newsletterID = action.payload;
          var newsletterToEdit = {};
          state.newsletter.map(newsletter => {
            if(newsletter._id == newsletterID) {
              newsletterToEdit = newsletter;
            }
          })
          return{
            ...state,
            newsletterToEdit
          }
        default: return state;
    }
}
