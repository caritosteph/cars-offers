import React, { Component } from 'react';
import OfferList from './OfferList';

class Dashboard extends Component {
  render() {
    return (
        <OfferList offers={[
        {  name: 'test',
           image: 'https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/bb6178549bf25e16d6e7a243060dc12758126ac0.jpg',
           price: '20.00'
         },
         {  name: 'test2',
            image: 'https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/bb6178549bf25e16d6e7a243060dc12758126ac0.jpg',
            price: '220.00'
          },
          {  name: 'test3',
             image: 'https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/bb6178549bf25e16d6e7a243060dc12758126ac0.jpg',
             price: '230.00'
           },
           {  name: 'test4',
              image: 'https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/bb6178549bf25e16d6e7a243060dc12758126ac0.jpg',
              price: '202.00'
            }
       ]} />
    )
  }

}

export default Dashboard;
