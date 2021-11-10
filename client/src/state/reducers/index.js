import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { testReducer } from './testReducer';

const reducers = combineReducers({
  products: productsReducer,
  testMessage: testReducer,
});

export default reducers;
