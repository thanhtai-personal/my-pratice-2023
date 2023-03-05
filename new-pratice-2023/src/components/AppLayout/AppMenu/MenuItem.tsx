import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const MenuItem = (props: any) => {
  const { item } = props;
  return (
    <ListItem button key={item.id || item.key}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

export default MenuItem;
