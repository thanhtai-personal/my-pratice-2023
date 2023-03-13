import { FormItemTypes } from "src/components/common/Form";
import InputField from "src/components/common/InputField";
import ButtonField from "src/components/common/ButtonField";
import {
  createCategory,
  updateCategoryName,
  updateCategoryParent,
} from "src/actions/category.actions";
import { FieldAlignment } from "src/components/common/Form";
import { object, string } from "yup";
import { isEmpty } from "lodash";

export const categorySchema = object().shape({
  name: string().min(8, "name").required("name"),
  parent: string(),
});

const CategoryModel = {
  name: {
    name: "name",
    priority: 1,
    type: FormItemTypes.FIELD,
    label: "Category name",
    id: "category-name",
    inputProps: {
      fullWidth: true,
    },
    selector: (state: any) => ({
      validateObj: state.categories.validateObj,
    }),
    onChange: updateCategoryName,
    render: (item) => <InputField item={item} />,
  },
  parentCategory: {
    name: "parentCategory",
    priority: 2,
    type: FormItemTypes.FIELD,
    label: "parent",
    id: "category-parentCategory",
    inputProps: {
      fullWidth: true,
    },
    selector: (state: any) => ({
      validateObj: state.categories.validateObj,
    }),
    onChange: updateCategoryParent,
    render: (item) => <InputField item={item} />, //SelectField
  },
  actionsFooter: {
    type: FormItemTypes.ACTION,
    alignment: FieldAlignment.BOTTOM,
    label: "Create",
    action: createCategory,
    selector: (state: any) => ({
      loading: state.categories.loading,
      validateObj: state.categories.validateObj,
    }),
    validated: (validateObj: any) => {
      return !validateObj?.errors || isEmpty(validateObj?.errors);
    },
    render: ({ label, action, selector, validated }) => (
      <ButtonField
        action={action}
        label={label}
        selector={selector}
        validated={validated}
      />
    ),
  },
};

export default CategoryModel;
