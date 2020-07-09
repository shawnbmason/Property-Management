import React, { Component } from 'react';

import NewNewsletterForm from '../newsletter/newsletterNewForm';

class NewRequest extends Component {
  onSubmit = (fields) => {
      // if(button == 'submit') {
        // save new newsletter on the backend. perform a post request here.
        // console.log('trying to submit to backend');
      // }
      this.props.history.push('/dashboard');
  }

  onCancel = () => {
      this.props.history.push('/dashboard');
  }

  render() {
    return (
      <div className='new-request'>
          <NewNewsletterForm
          onCancel={() => this.onCancel()}
          onSubmit={(event) => this.onSubmit(event)}
          formTitle='New Service Request'
          fieldOnePlaceHolder ='Service Request Title Here'
          fieldOneTitle='Service Request Title'
          fieldTwoPlacHolder='Service Request Description (Here)'
          fieldTwoTitle='Description'
          />
      </div>
    )
  }
}

export default NewRequest;
