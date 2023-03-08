export type LoginState = {
  username: string;
  password: string;
  loading: boolean;
};

const state = {
  username: "",
  password: "",
  loading: false,
};

export default state;
