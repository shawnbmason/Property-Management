import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class NewsletterDetail extends Component {

  componentDidMount() {
    this.props.fetchNewslettersWithId(this.props.match.params.id);
  }

  render() {
    console.log(this.props.newsletterToEdit);
    return (
      <div className='newsletter-detail'>
          newsletter detail
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { newsletterToEdit } = state.newsletters
  return { newsletterToEdit };
}

export default connect(mapStateToProps, actions)(NewsletterDetail);
