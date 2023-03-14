export type ProductState = {
  name: string;
  parentProduct: string;
  loading: boolean;
  products: Array<any>;
  validateObj: any;
};

const state = {
  name: "",
  parentProduct: "",
  products: [],
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
