import { FormItemTypes } from "components/common/Form";
import InputField from "components/common/InputField";
import ButtonField from "components/common/ButtonField";
import { login, updatePassword, updateUsername } from "actions/login.actions";
import { FieldAlignment } from "components/common/Form";

const LoginModel = {
  userName: {
    priority: 1,
    type: FormItemTypes.FIELD,
    label: "Username",
    id: "login-user-name",
    inputProps: {
      fullWidth: true,
    },
    onChange: updateUsername,
    helpText: "We'll never share your account",
    render: (item) => <InputField item={item} />,
  },
  password: {
    priority: 2,
    type: FormItemTypes.FIELD,
    label: "Password",
    id: "login-password",
    helpText: "We'll secure your password",
    inputProps: {
      type: "password",
      fullWidth: true,
    },
    onChange: updatePassword,
    render: (item) => <InputField item={item} />,
  },
  actionsFooter: {
    type: FormItemTypes.ACTION,
    alignment: FieldAlignment.BOTTOM,
    label: "Login",
    action: login,
    selector: (state: any) => ({
      loading: state.login.loading,
    }),
    render: ({ label, action, selector }) => (
      <ButtonField action={action} label={label} selector={selector} />
    ),
  },
};

export default LoginModel;
