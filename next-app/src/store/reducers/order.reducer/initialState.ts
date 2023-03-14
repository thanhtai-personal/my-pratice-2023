export type OrderState = {
  name: string;
  parentOrder: string;
  loading: boolean;
  orders: Array<any>;
  validateObj: any;
};

const state = {
  name: "",
  parentOrder: "",
  orders: [],
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
