import { useEffect, useMemo } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";
import { useCateforiesStyles } from "./styles";
import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";
import ListProductsPage from "src/screens/Products/List";
import CreateProductPage from "src/screens/Products/Create";
import DetailProductPage from "src/screens/Products/Detail";

const ProductsPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  const classes = useCateforiesStyles(props);

  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["products", subMenuKey || "list-products"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  const contentElement = useMemo(() => {
    switch (subMenuKey) {
      case "list-products":
        return <ListProductsPage />;
      case "create-product":
        return <CreateProductPage />;
      case "detail-product":
        return <DetailProductPage />;
      default:
        return <ListProductsPage />;
    }
  }, [subMenuKey]);

  return (
    <Flex width={"100%"} height={"100%"} pl={"266px"} className={classes.root}>
      {contentElement}
    </Flex>
  );
};

export default ProductsPage;
