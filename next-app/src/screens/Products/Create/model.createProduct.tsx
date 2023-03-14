import { FormItemTypes } from "src/components/common/Form";
import InputField from "src/components/common/InputField";
import SelectField from "src/components/common/SelectField";
import ButtonField from "src/components/common/ButtonField";
import {
  createProduct,
  updateProductName,
  updateProductParent,
  getAllProducts,
} from "src/actions/product.actions";
import { FieldAlignment } from "src/components/common/Form";
import { object, string } from "yup";
import { isEmpty } from "lodash";

export const productSchema = object().shape({
  name: string().min(8, "name").required("name"),
  parent: string(),
});

const ProductModel = {
  name: {
    name: "name",
    priority: 1,
    type: FormItemTypes.FIELD,
    label: "Product name",
    id: "product-name",
    inputProps: {
      fullWidth: true,
    },
    selector: (state: any) => ({
      validateObj: state.products.validateObj,
    }),
    onChange: updateProductName,
    render: (item) => <InputField item={item} />,
  },
  parentProduct: {
    name: "parentProduct",
    priority: 2,
    type: FormItemTypes.FIELD,
    label: "parent",
    id: "product-parentProduct",
    inputProps: {
      fullWidth: true,
    },
    selector: (state: any) => ({
      validateObj: state.products.validateObj,
    }),
    useNoneValue: true,
    getOptions: getAllProducts,
    onChange: updateProductParent,
    render: (item) => <SelectField item={item} />,
  },
  actionsFooter: {
    type: FormItemTypes.ACTION,
    alignment: FieldAlignment.BOTTOM,
    label: "Create",
    action: createProduct,
    selector: (state: any) => ({
      loading: state.products.loading,
      validateObj: state.products.validateObj,
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

export default ProductModel;
