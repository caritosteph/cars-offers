import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardItem = styled.div`
  flex: 1 0;
  box-sizing: border-box;
  padding: 0.625em;
  margin: 0.3125em;
  background-color: #fff;
  color: #171e42;
`;

CardItem.displayName = 'CardItem';

const CardHeader = styled.div`
  display: flex;
  padding: 1em;
  justify-content: center;
`;

const Title = styled.p`
  color: '#ccc';
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.01071em;
`;

Title.displayName = 'Title';

const CardContent = styled.div`
  display: flex;
  padding-top: 0.625em;
  padding-bottom: 0.625em;
  justify-content: center;
`;

const CardFooter = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: center;
`;

const Content = styled.p`
  color: #767676;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Card = ({ name, image, price }) => {
  return (
    <CardItem>
      <CardHeader>
        <Title>{name}</Title>
      </CardHeader>
      <CardContent>
        <img src={image} alt={name} />
      </CardContent>
      <CardFooter>
        <Content>{price}</Content>
      </CardFooter>
    </CardItem>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default Card;
