import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsletterBox from './newsletterBox';
import NewsletterLatest from './newsletterLatest';

import { FormTitle } from '../formTitle';
import { FormButton } from '../formFields';

class NewsletterDetail extends Component {

  componentDidMount() {
    this.props.fetchNewslettersWithId(this.props.match.params.id);
  }

  render() {
    console.log(this.props.newsletterToEdit);
    return (
      <div className='newsletter-detail'>
          <FormTitle className='newletter-detail__title' text='Newletter Archive'/>A
          <NewsletterBox date={this.props.newsletterToEdit.date}/>
          <NewsletterLatest {...this.props.newsletterToEdit}/>
          <FormButton
              className='newsletter-detail__cancel'
              small={true}
              onClick={() => this.props.history.push('/dashboard')}
              title='Cancel'
              />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters
  return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(NewsletterDetail);
