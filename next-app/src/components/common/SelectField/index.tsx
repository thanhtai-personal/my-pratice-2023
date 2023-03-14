import { FormHelperText, MenuItem, Select, useTheme } from "@material-ui/core";
import { useEffect, useState } from "react";
import Flex from "src/components/common/Flex";
import useLocalize from "src/hooks/useLocalize";
import { useGlobalStyle } from "src/styles";
import Text from "../Text";

const SelectField = (props: any) => {
  const { item = {} } = props;
  const {
    onChange,
    getOptions,
    options,
    validateObj = { errors: [] },
    name,
    useNoneValue = false,
    placeholder = "",
    viewMode,
    defaultValueText,
  } = item;
  const { t } = useLocalize();
  const theme = useTheme();
  const [_options, setOptions] = useState([] as Array<any>);
  const globalClasses = useGlobalStyle();

  const handleChange = (e: any, value) => {
    onChange && onChange({ value: value });
  };

  useEffect(() => {
    setOptions(options || []);
  }, [options]);

  useEffect(() => {
    if (getOptions) {
      (async () => {
        try {
          const res = await getOptions();
          setOptions(res || []);
        } catch (error) {}
      })();
    }
  }, [getOptions]);

  return (
    <Flex column width={"100%"} bgcolor={theme.palette.background.paper}>
      {viewMode && (
        <Text className={globalClasses.text}>{t(item.label)}:&nbsp;</Text>
      )}
      {viewMode && (
        <Text className={globalClasses.text}>{defaultValueText}</Text>
      )}
      {!viewMode && (
        <Select
          variant="standard"
          disableUnderline
          onChange={handleChange}
          placeholder={placeholder}
          error={validateObj?.errors?.includes(name)}
          style={{
            border: validateObj?.errors?.includes(name)
              ? "solid 1px rgba(250, 6, 6, 0.24)"
              : "solid 1px rgba(0,0,0,0.12)",
            borderRadius: ".5rem",
            padding: "0 12px",
          }}
        >
          {useNoneValue && (
            <MenuItem value={null}>
              <Flex centerY key={"none-value"}>
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  None
                </Text>
              </Flex>
            </MenuItem>
          )}
          {_options.map((item) => (
            <MenuItem value={item.key || item._id}>
              <Flex centerY key={item.key}>
                {item.icon}&nbsp;&nbsp;
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.name}
                </Text>
              </Flex>
            </MenuItem>
          ))}
        </Select>
      )}
      {item.helpText && !viewMode && (
        <FormHelperText id={`${item.id}-helper-text`}>
          {item.helpText}
        </FormHelperText>
      )}
    </Flex>
  );
};

export default SelectField;
