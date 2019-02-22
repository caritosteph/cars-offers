import axios from 'axios';
import { config } from './config';

const fetchData = async () => {
  try {
    const result = await axios.get(config.sixtUrl);
    return result.data.offers;
  } catch (e) {
    console.log('Error calling SixtAPI');
    return {};
  }
}

export { fetchData };
