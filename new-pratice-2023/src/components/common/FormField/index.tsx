import Flex from "../Flex";
import { fieldStyles } from "./styles";

interface FieldProps {
  model: any;
}

const FormField = (props: FieldProps) => {
  const classes = fieldStyles();
  const { model } = props;
  const { render, ...nestedProps } = model;

  return (
    <Flex width={"100%"} marginTop={"8px"} my={2}>
      {render(nestedProps)}
    </Flex>
  );
};
export default FormField;
