import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Alignment, AlignmentType } from "./index";
import clsx from "clsx";
import _ from "lodash";
import MenuItem from "./MenuItem";
import { listStyle } from "./styles";
import Flex from "src/components/common/Flex";

interface MenuProps {
  alignment: Alignment;
  onClose: any;
  menus: Array<any>;
  classes?: any;
  dividerList?: Array<any>;
  activeMenus?: Array<any>;
}

const Menu = (props: MenuProps) => {
  const intenalClasses = listStyle();
  const {
    onClose,
    alignment,
    classes = intenalClasses,
    dividerList,
    menus,
    activeMenus,
  } = props;

  const handleClose = () => {
    onClose();
  };

  const handleClickMenu = () => {};

  return (
    <Flex
      column
      className={clsx(classes.list, {
        [classes.fullList]:
          alignment === AlignmentType.top || alignment === AlignmentType.bottom,
      })}
      role="presentation"
      onClick={handleClickMenu}
      onKeyDown={handleClose}
      alignItems={"space-between"}
      justifyContent={"space-between"}
      height={"100%"}
    >
      <List>
        {(menus || []).map((item, index) => (
          <MenuItem
            key={item.id || item.key}
            item={item}
            activeMenus={activeMenus}
          />
        ))}
      </List>
      <Flex column width={"100%"}>
        {dividerList && !_.isEmpty(dividerList) && <Divider />}
        {dividerList && !_.isEmpty(dividerList) && (
          <List>
            {dividerList.map((item, index) => (
              <MenuItem
                key={item.id || item.key}
                item={item}
                activeMenus={activeMenus}
              />
            ))}
          </List>
        )}
      </Flex>
    </Flex>
  );
};

export default Menu;
