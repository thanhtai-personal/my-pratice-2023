import React from "react";
import Drawer from "@material-ui/core/Drawer";
import useDepsContainer from "hooks/useDepsContainer";
import { observer } from "mobx-react";
import { openAnchor } from "actions/layout.actions";
import AppMenu from "./AppMenu";

export const AnchorType = {
  top: "top",
  left: "left",
  bottom: "bottom",
  right: "right",
};

export type Anchor = "top" | "left" | "bottom" | "right";

interface AppDrawerProps {}

const AppDrawer = (props: AppDrawerProps) => {
  const { appMenu } = useDepsContainer();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      openAnchor(anchor, open);
    };

  return (
    <div>
      {(["left", "right", "top", "bottom"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={anchor === appMenu.activeAnchor}
            onClose={toggleDrawer(anchor, false)}
          >
            {<AppMenu anchor={anchor} toggleDrawer={toggleDrawer} />}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default observer(AppDrawer);
