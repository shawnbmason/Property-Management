
import axios from 'axios';

import { ROOT_URL } from '../config';

export funtion signUp(fields, success) {
  console.log(fields);
  return function(dispatch) {
    // axios.post(`${ROOT_URL}/signup`, fields)
    //   .then(respond => {
    //     //do somthing with that response
    //   })
    //   .catch(err => {
    //     if(err) { console.log(err) }
    //   })
  }
}
