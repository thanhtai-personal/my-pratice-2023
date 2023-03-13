import CategoryActionType from "src/actionTypes/category.actionsType";
import { createCategory as createCategoryApi } from "src/apis/category";
import { categorySchema } from "src/screens/Categories/Create/model.category";
import store from "src/store";

export const createCategory = async () => {
  store.dispatch({
    type: CategoryActionType.UPDATE_LOADING_CATEGORY,
    payload: true,
  });
  try {
    const categoryData = store.getState((state) => state.categories);
    const response = await createCategoryApi({
      category: categoryData.category,
      parent: categoryData.parent,
    });
  } catch (error: any) {}
  store.dispatch({
    type: CategoryActionType.UPDATE_LOADING_CATEGORY,
    payload: false,
  });
};

export const updateValidate = () => {
  const { name, parent } = store.getState((state) => state.categories);
  categorySchema
    .validate(
      {
        name,
        parent,
      },
      { abortEarly: false }
    )
    .then((valid) => {
      store.dispatch({
        type: CategoryActionType.UPDATE_VALIDATE_CATEGORY,
        payload: [],
      });
    })
    .catch((err) => {
      store.dispatch({
        type: CategoryActionType.UPDATE_VALIDATE_CATEGORY,
        payload: err.errors,
      });
    });
};

export const updateCategoryName = (data: { value: string }) => {
  store.dispatch({
    type: CategoryActionType.UPDATE_CATEGORY_NAME,
    payload: data.value,
  });
  updateValidate();
};

export const updateCategoryParent = (data: { value: string }) => {
  store.dispatch({
    type: CategoryActionType.UPDATE_CATEGORY_PARENT,
    payload: data.value,
  });
  updateValidate();
};
