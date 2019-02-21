import axios from 'axios';
import config from './config';

export const fetchData = async () => {
  try {
    const offers = await axios.get(config.offersUrl);
    return offers;
  } catch (e) {
    console.log('Error calling SixtAPI');
    return {};
  }
}
