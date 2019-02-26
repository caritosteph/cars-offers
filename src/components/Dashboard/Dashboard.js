import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfferList from './OfferList';
import { fetchOffers } from '../../actions/offers';

class Dashboard extends Component {

  componentDidMount() {
    const { fetchOffers } = this.props;
    fetchOffers();
  }

  render() {
    const { offers } = this.props;
    return (
        <OfferList offers={offers} />
    )
  }

}

const mapStateToProps = (state) => ({
  offers: state.offers.offers
})
const mapDispatchToProps  = ({
  fetchOffers
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
