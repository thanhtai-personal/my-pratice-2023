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
  menus?: Array<any>;
  classes?: any;
  dividerList?: Array<any>;
}

const AppMenu = (props: AppMenuProps) => {
  const { menus, dividerList } = props;
  const { appLayout } = useDepsContainer();

  const handleOpenAppMenu =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      updateActiveAlimentMenu(open ? appLayout.menuAlignment : []);
    };

  return (
    <div id={"menu-wrapper"}>
      {(appLayout.menuAlignment || []).map((alignment) => (
        <React.Fragment key={alignment}>
          <Drawer
            anchor={alignment}
            open={true}
            onClose={handleOpenAppMenu(false)}
          >
            {
              <Menu
                alignment={alignment}
                openAppMenu={handleOpenAppMenu(false)}
                menus={(menus || []).filter((m) => m.alignment === alignment)}
                dividerList={(dividerList || []).filter(
                  (m) => m.alignment === alignment
                )}
              />
            }
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default observer(AppMenu);
