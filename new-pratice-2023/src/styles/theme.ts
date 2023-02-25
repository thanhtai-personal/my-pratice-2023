import createMuiTheme from "@material-ui/core/styles/createTheme";

declare module "@material-ui/core/Typography/Typography" {
  interface TypographyPropsVariantOverrides {
    lightBold: true;
    bold: true;
    light: true;
    link: true;
  }
}

declare module "@material-ui/core/Button/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    success: true;
    danger: true;
    info: true;
  }
}

export const Colors = {
  bg: "#F8F9FF",
  header: "#18181B",
  primary: "#3778FB",
  secondary: "#5EDB7C",
  appModalBg: "white",
};

export const createAppTheme = () => {
  const muiTheme = createMuiTheme({
    typography: {
      caption: {
        fontSize: "14px",
      },
    },
    palette: {
      primary: {
        main: Colors.primary,
      },
      secondary: {
        main: Colors.secondary,
      },
    },
  });
  return {
    ...muiTheme,
    spacing: (factor) => `${0.25 * factor}rem`,
    colors: {
      ...Colors,
    },
    metrics: {},
    formGroup: {
      border: "1px solid #D9DAED",
      padding: "10px",
      borderRadius: 10,
    },

    autoTransformWhenHolver: {
      transition: "all .2s",
      "&:hover": {
        transform: "translateY(-5px)",
      },
    },

    input: {
      borderRadius: 5,
      border: `2px solid #84DEFF`,
      padding: "8px 16px",
    },
  };
};

export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
export type AppTheme = ReturnType<typeof createAppTheme>;
