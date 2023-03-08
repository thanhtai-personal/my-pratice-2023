import useSelector from "hooks/useSelector";
import Flex from "../Flex";
import { fieldStyles } from "./styles";

interface FieldProps {
  model: any;
}

const FormField = (props: FieldProps) => {
  const classes = fieldStyles();
  const { model } = props;
  const { render, selector, ...nestedProps } = model;
  const storeData = useSelector(selector || ((state) => ({})));

  return (
    <Flex width={"100%"} marginTop={"8px"} my={2}>
      {render({ ...nestedProps, ...storeData })}
    </Flex>
  );
};
export default FormField;
