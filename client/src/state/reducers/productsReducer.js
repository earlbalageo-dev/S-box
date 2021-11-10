import {
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT_STOCK_LVL,
} from '../constants/productsConstants';

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [...state, action.payload];
    case UPDATE_PRODUCT_STOCK_LVL:
      return [...state, action.payload];
    default:
      return state;
  }
};
