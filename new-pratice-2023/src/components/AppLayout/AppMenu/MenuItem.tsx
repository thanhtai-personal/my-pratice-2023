import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import SubMenu from "./SubMenu";
import _ from "lodash";

const MenuItem = (props: any) => {
  const { item } = props;
  return (
    <ListItem button key={item.id || item.key}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.name} />
      {item.subItems && !_.isEmpty(item.subItems) && (
        <SubMenu items={item.subItems} />
      )}
    </ListItem>
  );
};

export default MenuItem;
