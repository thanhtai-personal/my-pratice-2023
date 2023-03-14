export type RoleState = {
  name: string;
  parentRole: string;
  loading: boolean;
  roles: Array<any>;
  validateObj: any;
};

const state = {
  name: "",
  parentRole: "",
  roles: [],
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
