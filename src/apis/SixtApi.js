import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('/offers');
    return response.data;
  } catch (e) {
    return {}
  }
}
