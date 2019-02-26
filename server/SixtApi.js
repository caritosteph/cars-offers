import axios from 'axios';
import { config } from './config';

const fetchData = async () => {
  try {
    const result = await axios.get(config.sixtUrl);
    const response = result.data.offers;
    const offers = [];

    response.forEach(offer => {
      offers.push({
        name: offer.description,
        image: offer.carGroupInfo.modelExample.imageUrl,
        price: offer.prices.totalPrice.amount.value,
        sortIndexes: offer.sortIndexes
      })
    });
    return offers;
  } catch (e) {
    console.log('Error calling SixtAPI');
    return {};
  }
}

export { fetchData };
