export type CategoryState = {
  name: string;
  parentCategory: string;
  loading: boolean;
  categories: Array<any>;
  validateObj: any;
};

const state = {
  name: "",
  parentCategory: "",
  categories: [],
  loading: false,
  validateObj: {
    name: {
      message: "",
    },
    parent: {
      message: "",
    },
    errors: [],
  },
};

export default state;
