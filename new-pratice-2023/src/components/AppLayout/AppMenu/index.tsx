import React from "react";
import Drawer from "@material-ui/core/Drawer";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";
import { updateActiveAlimentMenu } from "actions/layout.actions";
import Menu from "./Menu";

export const AlignmentType = {
  top: "top",
  left: "left",
  bottom: "bottom",
  right: "right",
};

export type Alignment = "top" | "left" | "bottom" | "right";

interface AppMenuProps {
  menus?: Array<any>; //add menu items via this props
  classes?: any;
  dividerList?: Array<any>; //add menu items under divider via this props
}

const AppMenu = (props: AppMenuProps) => {
  const { menus, dividerList } = props;
  const { appLayout } = useDepsContainer();

  const handleCloseAppMenu = () => {
    updateActiveAlimentMenu([]);
  };

  return (
    <div id={"menu-wrapper"}>
      {Object.keys(AlignmentType)
        .map((key) => AlignmentType[key])
        .map((alignment) => (
          <Drawer
            anchor={alignment}
            open={appLayout.menuAlignment.includes(alignment)}
            onClose={handleCloseAppMenu}
          >
            <Menu
              alignment={alignment}
              onClose={handleCloseAppMenu}
              menus={(menus || []).filter((m) => m.alignment === alignment)}
              dividerList={(dividerList || []).filter(
                (m) => m.alignment === alignment
              )}
            />
          </Drawer>
        ))}
    </div>
  );
};

export default observer(AppMenu);
