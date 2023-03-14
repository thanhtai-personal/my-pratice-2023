import { FormItemTypes } from "src/components/common/Form";
import InputField from "src/components/common/InputField";
import SelectField from "src/components/common/SelectField";
import ButtonField from "src/components/common/ButtonField";
import {
  createRole,
  updateRoleName,
  updateRoleParent,
  getAllRoles,
} from "src/actions/role.actions";
import { FieldAlignment } from "src/components/common/Form";
import { object, string } from "yup";
import { isEmpty } from "lodash";
import Flex from "src/components/common/Flex";

export const roleSchema = object().shape({
  name: string().min(8, "name").required("name"),
  parent: string(),
});

const RoleModel = {
  name: {
    name: "name",
    priority: 1,
    type: FormItemTypes.FIELD,
    label: "Role name",
    id: "role-name",
    inputProps: {
      fullWidth: true,
    },
    selector: (state: any) => ({
      validateObj: state.roles.validateObj,
    }),
    onChange: updateRoleName,
    render: (item) => <InputField item={item} />,
  },
  parentRole: {
    name: "parentRole",
    priority: 2,
    type: FormItemTypes.FIELD,
    label: "parent",
    id: "role-parentRole",
    inputProps: {
      fullWidth: true,
    },
    selector: (state: any) => ({
      validateObj: state.roles.validateObj,
    }),
    useNoneValue: true,
    getOptions: getAllRoles,
    onChange: updateRoleParent,
    render: (item) => <SelectField item={item} />,
  },
  actionsFooter: {
    type: FormItemTypes.ACTION,
    alignment: FieldAlignment.BOTTOM,
    label: "Edit",
    deleteLabel: "Delete",
    deleteAction: () => {},
    action: createRole,
    selector: (state: any) => ({
      loading: state.roles.loading,
      validateObj: state.roles.validateObj,
    }),
    validated: (validateObj: any) => {
      return true;
    },
    render: ({
      label,
      action,
      selector,
      validated,
      deleteAction,
      deleteLabel,
    }) => (
      <Flex>
        <ButtonField
          action={action}
          label={label}
          selector={selector}
          validated={validated}
        />
        <ButtonField
          action={deleteAction}
          label={deleteLabel}
          selector={selector}
          validated={validated}
        />
      </Flex>
    ),
  },
};

export default RoleModel;
