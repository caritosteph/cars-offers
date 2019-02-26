import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Offer from './Offer';

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
`;

const OfferList = ({ offers }) => {
  return (
    <List>
      {
        offers.map((offerInfo, index) => (
          <Offer key={index} offerInfo={offerInfo} />
        ))
      }
    </List>
  );
}

OfferList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OfferList;
