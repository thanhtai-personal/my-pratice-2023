import { Collapse, List } from "@material-ui/core";
import MenuItem from "./MenuItem";

const SubMenu = (props: any) => {
  const { items = [], isActive } = props;
  return (
    <Collapse in={isActive}>
      <List>
        {items.map((item) => (
          <MenuItem item={item} key={item.id || item.key} />
        ))}
      </List>
    </Collapse>
  );
};

export default SubMenu;
