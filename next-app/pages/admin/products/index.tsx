import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";

const ProductsPage = (props) => {
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["products", "list-products"]);
    return () => setActiveMenu([]);
  }, []);

  return <Flex>products page</Flex>;
};

export default ProductsPage;
