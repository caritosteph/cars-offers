import { ALL_OFFERS } from './constantTypes';
import { fetchData } from '../apis/SixtApi';

const showOffers = (offers) => ({
  type: ALL_OFFERS,
  offers
})

export const fetchOffers = () => dispatch => (
  fetchData().then(offers => dispatch(showOffers(offers)))
)
