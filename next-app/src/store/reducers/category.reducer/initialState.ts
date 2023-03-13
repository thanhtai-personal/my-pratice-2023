export type CategoryState = {
  name: string;
  parentCategory: string;
  loading: boolean;
  validateObj: any;
};

const state = {
  name: "",
  parentCategory: "",
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
