import initialState, { ProductState } from "./initialState";
import ProductActionType from "src/actionTypes/product.actionsType";
import produce from "immer";

const categoryReducer = (state: ProductState = initialState, action: any) => {
  switch (action.type) {
    case ProductActionType.UPDATE_LOADING_PRODUCT:
      return produce(state, (prevState) => {
        prevState.loading = action.payload;
      });
    case ProductActionType.UPDATE_PRODUCT_NAME:
      return produce(state, (prevState) => {
        prevState.name = action.payload;
      });
    case ProductActionType.UPDATE_PRODUCT_PARENT:
      return produce(state, (prevState) => {
        prevState.parentProduct = action.payload;
      });
    case ProductActionType.UPDATE_VALIDATE_PRODUCT:
      return produce(state, (prevState) => {
        prevState.validateObj.errors = action.payload;
      });
    default:
      return state;
  }
};

export default categoryReducer;
