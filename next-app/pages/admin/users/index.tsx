import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";

const UsersPage = (props) => {
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["users", "list-users"]);
    return () => setActiveMenu([]);
  }, []);

  return <Flex>users page</Flex>;
};

export default UsersPage;
