import { ALL_OFFERS, SORT_OFFERS } from '../actions/constantTypes';
import { sortOffersObject } from '../utils';

const initialState={
  offers: []
}

const offers = (state = initialState, action) => {
  const { type, offers, key } = action

  switch (type) {
    case ALL_OFFERS:
      return {
        ...state,
        offers: [...offers]
      }
    case SORT_OFFERS:
      const offersList = [...state.offers];
      const offersSorted = sortOffersObject(offersList, key);
      return {
        ...state,
        offers: [...offersSorted]
      }
    default:
      return state;
  }
}

export default offers;
