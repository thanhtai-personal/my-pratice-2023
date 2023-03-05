import React from "react";
import Drawer from "@material-ui/core/Drawer";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";
import { openAppMenu } from "actions/layout.actions";
import Menu from "./Menu";

export const AnchorType = {
  top: "top",
  left: "left",
  bottom: "bottom",
  right: "right",
};

export type Anchor = "top" | "left" | "bottom" | "right";

interface AppMenuProps {}

const AppMenu = (props: AppMenuProps) => {
  const { appMenu } = useDepsContainer();

  const handleOpenAppMenu =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      openAppMenu(anchor, open);
    };

  return (
    <div>
      {(Object.keys(AnchorType).map((key) => AnchorType[key]) as Anchor[]).map(
        (anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={anchor === appMenu.activeAnchor}
              onClose={handleOpenAppMenu(anchor, false)}
            >
              {
                <Menu
                  anchor={anchor}
                  openAppMenu={handleOpenAppMenu(anchor, false)}
                  menus={[]}
                />
              }
            </Drawer>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default observer(AppMenu);
