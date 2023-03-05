import React from "react";
import Drawer from "@material-ui/core/Drawer";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";
import { openAppMenu } from "actions/layout.actions";
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
  const { appMenu } = useDepsContainer();

  const handleOpenAppMenu =
    (alignment: Alignment, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      openAppMenu(alignment, open);
    };

  return (
    <div>
      {(
        Object.keys(AlignmentType).map(
          (key) => AlignmentType[key]
        ) as Alignment[]
      ).map((alignment) => (
        <React.Fragment key={alignment}>
          <Drawer
            anchor={alignment}
            open={alignment === appMenu.activeAlignment}
            onClose={handleOpenAppMenu(alignment, false)}
          >
            {
              <Menu
                alignment={alignment}
                openAppMenu={handleOpenAppMenu(alignment, false)}
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
