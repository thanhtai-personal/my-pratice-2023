import ProductActionType from "src/actionTypes/product.actionsType";
import {
  createProduct as createProductApi,
  getProducts as getProductApi,
} from "src/apis/product";
import { productSchema } from "src/screens/Products/Create/model.createProduct";
import store from "src/store";

export const createProduct = async () => {
  store.dispatch({
    type: ProductActionType.UPDATE_LOADING_PRODUCT,
    payload: true,
  });
  try {
    const productData = store.getState((state) => state.products);
    const response = await createProductApi({
      product: productData.product,
      parent: productData.parent,
    });
  } catch (error: any) {}
  store.dispatch({
    type: ProductActionType.UPDATE_LOADING_PRODUCT,
    payload: false,
  });
};

export const getAllProducts = async () => {
  store.dispatch({
    type: ProductActionType.UPDATE_LOADING_PRODUCT,
    payload: true,
  });
  try {
    const response = await getProductApi();
    store.dispatch({
      type: ProductActionType.UPDATE_LOADING_PRODUCT,
      payload: false,
    });
    return response;
  } catch (error: any) {
    store.dispatch({
      type: ProductActionType.UPDATE_LOADING_PRODUCT,
      payload: false,
    });
  }
};

export const updateValidate = () => {
  const { name, parent } = store.getState((state) => state.products);
  productSchema
    .validate(
      {
        name,
        parent,
      },
      { abortEarly: false }
    )
    .then((valid) => {
      store.dispatch({
        type: ProductActionType.UPDATE_VALIDATE_PRODUCT,
        payload: [],
      });
    })
    .catch((err) => {
      store.dispatch({
        type: ProductActionType.UPDATE_VALIDATE_PRODUCT,
        payload: err.errors,
      });
    });
};

export const updateProductName = (data: { value: string }) => {
  store.dispatch({
    type: ProductActionType.UPDATE_PRODUCT_NAME,
    payload: data.value,
  });
  updateValidate();
};

export const updateProductParent = (data: { value: string }) => {
  store.dispatch({
    type: ProductActionType.UPDATE_PRODUCT_PARENT,
    payload: data.value,
  });
  updateValidate();
};
