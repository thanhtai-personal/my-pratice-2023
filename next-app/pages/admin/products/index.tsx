import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";

const ProductsPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["products", subMenuKey || "list-products"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  return <Flex>products page</Flex>;
};

export default ProductsPage;
