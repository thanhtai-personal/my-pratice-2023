import { FormItemTypes } from "components/common/Form";
import InputField from "components/common/InputField";
import ButtonField from "components/common/ButtonField";
import {
  signup,
  updatePassword,
  updateUsername,
  updatePasswordConfirm,
  updateFullName,
  updatePhoneNumber,
  updateEmail,
} from "actions/signup.actions";
import { FieldAlignment } from "components/common/Form";

const SignupModel = {
  userName: {
    priority: 1,
    type: FormItemTypes.FIELD,
    label: "Username",
    id: "signup-user-name",
    alignment: FieldAlignment.TOP_LEFT,
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
    alignment: FieldAlignment.TOP_LEFT,
    label: "Password",
    id: "signup-password",
    helpText: "We'll secure your password",
    inputProps: {
      type: "password",
      fullWidth: true,
    },
    onChange: updatePassword,
    render: (item) => <InputField item={item} />,
  },
  confirmPassword: {
    priority: 3,
    type: FormItemTypes.FIELD,
    alignment: FieldAlignment.TOP_LEFT,
    label: "Confirm your password",
    id: "signup-password-confirm",
    inputProps: {
      type: "password",
      fullWidth: true,
    },
    onChange: updatePasswordConfirm,
    render: (item) => <InputField item={item} />,
  },
  fullName: {
    priority: 1,
    type: FormItemTypes.FIELD,
    alignment: FieldAlignment.TOP_RIGHT,
    label: "Full name",
    id: "signup-user-name",
    inputProps: {
      fullWidth: true,
    },
    onChange: updateFullName,
    render: (item) => <InputField item={item} />,
  },
  phone: {
    priority: 2,
    type: FormItemTypes.FIELD,
    alignment: FieldAlignment.TOP_RIGHT,
    label: "Phone number",
    id: "signup-phone-number",
    inputProps: {
      fullWidth: true,
    },
    onChange: updatePhoneNumber,
    render: (item) => <InputField item={item} />,
  },
  email: {
    priority: 3,
    type: FormItemTypes.FIELD,
    alignment: FieldAlignment.TOP_RIGHT,
    label: "Email",
    id: "signup-email",
    inputProps: {
      fullWidth: true,
    },
    onChange: updateEmail,
    render: (item) => <InputField item={item} />,
  },
  actionsFooter: {
    type: FormItemTypes.ACTION,
    alignment: FieldAlignment.BOTTOM,
    label: "SIGN UP",
    action: signup,
    selector: (state: any) => ({
      loading: state.signup.loading,
    }),
    render: ({ label, action, selector }) => (
      <ButtonField action={action} label={label} selector={selector} />
    ),
  },
};

export default SignupModel;
