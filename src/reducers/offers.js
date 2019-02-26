import { ALL_OFFERS } from '../actions/constantTypes';

const initialState={
  offers: []
}

const offers = (state = initialState, action) => {
  const { type, offers } = action

  switch (type) {
    case ALL_OFFERS:
      return {
        ...state,
        offers: [...offers]
      }
    default:
      return state;
  }
}

export default offers;
