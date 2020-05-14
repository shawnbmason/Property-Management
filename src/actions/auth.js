
import axios from 'axios';

import { ROOT_URL } from '../config';

export function signUp(fields, success) {
  console.log(fields);
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, fields)
      .then(respond => {
        console.log(response);
        success()
        //do somthing with that response
      })
      .catch(err => {
        if(err) { console.log(err) }
      })
  }
}
