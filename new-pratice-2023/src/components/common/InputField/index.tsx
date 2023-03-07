import { FormHelperText, InputLabel, TextField } from "@material-ui/core";
import Flex from "components/common/Flex";
import useLocalize from "hooks/useLocalize";

const InputField = (props: any) => {
  const { item = {} } = props;
  const { inputProps = {}, labelProps = {}, onChange, ...nestedProps } = item;
  const { t } = useLocalize();

  const handleChange = (e: any) => {
    onChange && onChange({ value: e.target?.value });
  };

  return (
    <Flex column width={"100%"}>
      <TextField
        id={item.id}
        label={t(item.label)}
        aria-describedby={`${item.id}-helper-text`}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
        }}
        {...inputProps}
      />
      {item.helpText && (
        <FormHelperText id={`${item.id}-helper-text`}>
          {item.helpText}
        </FormHelperText>
      )}
    </Flex>
  );
};

export default InputField;
