import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";

const OrdersPage = (props) => {
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["orders", "list-orders"]);
    return () => setActiveMenu([]);
  }, []);

  return <Flex>orders page</Flex>;
};

export default OrdersPage;
