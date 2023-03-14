import { useEffect, useMemo } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";
import { useCateforiesStyles } from "./styles";
import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";
import ListOrdersPage from "src/screens/Orders/List";
import CreateOrderPage from "src/screens/Orders/Create";
import DetailOrderPage from "src/screens/Orders/Detail";

const OrdersPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  const classes = useCateforiesStyles(props);

  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["orders", subMenuKey || "list-orders"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  const contentElement = useMemo(() => {
    switch (subMenuKey) {
      case "list-orders":
        return <ListOrdersPage />;
      case "create-order":
        return <CreateOrderPage />;
      case "detail-order":
        return <DetailOrderPage />;
      default:
        return <ListOrdersPage />;
    }
  }, [subMenuKey]);

  return (
    <Flex width={"100%"} height={"100%"} pl={"266px"} className={classes.root}>
      {contentElement}
    </Flex>
  );
};

export default OrdersPage;
