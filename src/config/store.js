import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import reduces from  './reducers';

const store = createStore(
  reduces,
  applyMiddleware(thunk)
);

export default store;
