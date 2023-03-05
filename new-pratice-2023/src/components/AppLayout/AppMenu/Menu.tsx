import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Alignment, AlignmentType } from "./index";
import clsx from "clsx";
import _ from "lodash";
import MenuItem from "./MenuItem";

interface MenuProps {
  alignment: Alignment;
  onClose: any;
  menus: Array<any>;
  classes?: any;
  dividerList?: Array<any>;
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const Menu = (props: MenuProps) => {
  const intenalClasses = useStyles();
  const {
    onClose,
    alignment,
    classes = intenalClasses,
    dividerList,
    menus,
  } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]:
          alignment === AlignmentType.top || alignment === AlignmentType.bottom,
      })}
      role="presentation"
      onClick={handleClose}
      onKeyDown={handleClose}
    >
      <List>
        {(menus || []).map((item, index) => (
          <MenuItem key={item.id || item.key} item={item} />
        ))}
      </List>
      {dividerList && !_.isEmpty(dividerList) && <Divider />}
      {dividerList && !_.isEmpty(dividerList) && (
        <List>
          {dividerList.map((item, index) => (
            <MenuItem key={item.id || item.key} item={item} />
          ))}
        </List>
      )}
    </div>
  );
};

export default observer(Menu);
