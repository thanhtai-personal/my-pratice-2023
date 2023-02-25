import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import ConfirmModal, {
  ConfirmModalMessage,
} from "components/common/ConfirmModal";
import NotiStack, { NotiMessage } from "components/common/NotiStack";
import AppModal from "components/common/AppModal";
import { createAppTheme } from "styles/theme";
import appRoutes from "./appRoutes";

// eslint-disable-next-line no-var
var _ConfirmModalInstance: any = {};

// eslint-disable-next-line no-var
var _NotiStackInstance: any = {};

// eslint-disable-next-line no-var
var _AppModalInstance: any = {};

export const ConfirmModalInstance = {
  addMessage: (message: ConfirmModalMessage) => {
    _ConfirmModalInstance && _ConfirmModalInstance.addMessage(message);
  },
};

export const AppModalInstance = {
  replaceChildren: (childrenNode: any) => {
    _AppModalInstance && _AppModalInstance.replaceChildren(childrenNode);
  },
  updateChildrenProps: (props: any) => {
    _AppModalInstance && _AppModalInstance.updateChildrenProps(props);
  },
  updateModalProps: (props: any) => {
    _AppModalInstance && _AppModalInstance.updateModalProps(props);
  },
  open: () => {
    _AppModalInstance && _AppModalInstance.openModal();
  },
  close: () => {
    _AppModalInstance && _AppModalInstance.closeModal();
  },
  addCloseCallback: (callback) => {
    _AppModalInstance && _AppModalInstance.addCloseCallback(callback);
  },
  dangerousUpdateState: (key, value) => {
    _AppModalInstance && _AppModalInstance.dangerousUpdateState(key, value);
  },
};

export const NotiStackInstance = {
  push: (message: NotiMessage) => {
    _NotiStackInstance && _NotiStackInstance.push(message);
  },
};

const App = () => {
  const theme = createAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={appRoutes} />
      <ConfirmModal
        ref={(ref: any) => {
          _ConfirmModalInstance = ref;
        }}
      />
      <NotiStack
        ref={(ref: any) => {
          _NotiStackInstance = ref;
        }}
      />
      <AppModal
        ref={(ref: any) => {
          _AppModalInstance = ref;
        }}
      />
    </ThemeProvider>
  );
};

export default App;
