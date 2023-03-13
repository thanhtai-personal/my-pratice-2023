import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";

const OrdersPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["orders", subMenuKey || "list-orders"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  return <Flex>orders page</Flex>;
};

export default OrdersPage;
