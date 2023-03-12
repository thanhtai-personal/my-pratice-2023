import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";

const DashboardPage = (props) => {
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["categories", "list-categories"]);
    return () => setActiveMenu([]);
  }, []);

  return <Flex>dashboard page</Flex>;
};

export default DashboardPage;
