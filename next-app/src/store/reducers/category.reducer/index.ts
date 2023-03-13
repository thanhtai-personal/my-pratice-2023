import initialState, { CategoryState } from "./initialState";
import CategoryActionType from "src/actionTypes/category.actionsType";
import produce from "immer";

const categoryReducer = (state: CategoryState = initialState, action: any) => {
  switch (action.type) {
    case CategoryActionType.UPDATE_LOADING_CATEGORY:
      return produce(state, (prevState) => {
        prevState.loading = action.payload;
      });
    case CategoryActionType.UPDATE_CATEGORY_NAME:
      return produce(state, (prevState) => {
        prevState.name = action.payload;
      });
    case CategoryActionType.UPDATE_CATEGORY_PARENT:
      return produce(state, (prevState) => {
        prevState.parentCategory = action.payload;
      });
    case CategoryActionType.UPDATE_VALIDATE_CATEGORY:
      return produce(state, (prevState) => {
        prevState.validateObj.errors = action.payload;
      });
    default:
      return state;
  }
};

export default categoryReducer;
