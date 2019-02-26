import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import OfferList from './OfferList';
import { fetchOffers, sortOffers } from '../../actions/offers';
import Options from '../common/Options';

class Dashboard extends Component {

  componentDidMount() {
    const { fetchOffers } = this.props;
    fetchOffers();
  }

  render() {
    const { offers } = this.props;
    return (
      <Fragment>
        <Options />
        <OfferList offers={offers} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  offers: state.offers.offers
})
const mapDispatchToProps  = ({
  fetchOffers,
  sortOffers
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
