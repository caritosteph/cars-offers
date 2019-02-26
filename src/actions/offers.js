import { ALL_OFFERS, SORT_OFFERS } from './constantTypes';
import { fetchData } from '../apis/SixtApi';

const showOffers = (offers) => ({
  type: ALL_OFFERS,
  offers
})

export const sortOffers = (key) => ({
  type: SORT_OFFERS,
  key
})

export const fetchOffers = () => dispatch => (
  fetchData().then(offers => dispatch(showOffers(offers)))
)
