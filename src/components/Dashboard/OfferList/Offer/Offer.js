import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../common/Card';

const Offer = ({ offerInfo }) => {
  return (
    <Card
      name={offerInfo.name}
      image={offerInfo.image}
      price={offerInfo.price} />
  );
}

Offer.propTypes = {
  carInfo: PropTypes.object.isRequired
};

export default Offer;
