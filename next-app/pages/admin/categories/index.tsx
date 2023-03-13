import { useEffect, useMemo } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";
import { useCateforiesStyles } from "./styles";
import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";
import ListCategoriesPage from "src/screens/Categories/List";
import CreateCategoryPage from "src/screens/Categories/Create";
import DetailCategoryPage from "src/screens/Categories/Detail";

const CategoriesPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  const classes = useCateforiesStyles(props);

  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["categories", subMenuKey || "list-categories"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  const contentElement = useMemo(() => {
    switch (subMenuKey) {
      case "list-categories":
        return <ListCategoriesPage />;
      case "create-category":
        return <CreateCategoryPage />;
      case "detail-category":
        return <DetailCategoryPage />;
      default:
        return <ListCategoriesPage />;
    }
  }, [subMenuKey]);

  return (
    <Flex width={"100%"} height={"100%"} pl={"266px"} className={classes.root}>
      {contentElement}
    </Flex>
  );
};

export default CategoriesPage;
