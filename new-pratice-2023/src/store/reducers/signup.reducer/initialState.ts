export type SignupState = {
  username: string;
  password: string;
  confirmPassword: string;
  fullname: string;
  phoneNumber: string;
  email: string;
  loading: boolean;
};

const state = {
  username: "",
  password: "",
  confirmPassword: "",
  fullname: "",
  phoneNumber: "",
  email: "",
  loading: false,
};

export default state;
