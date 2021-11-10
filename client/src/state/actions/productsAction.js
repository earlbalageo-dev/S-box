import {
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT_STOCK_LVL,
} from '../constants/productsConstants';

export const addNewProduct = (product) => async (dispatch) => {
  dispatch({ type: ADD_NEW_PRODUCT, payload: product });
};

export const updateStockLvl = (product) => async (dispatch) => {
  dispatch({ type: UPDATE_PRODUCT_STOCK_LVL, payload: product });
};
