import { useEffect, useMemo } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";
import { useCateforiesStyles } from "./styles";
import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";
import ListRolesPage from "src/screens/Roles/List";
import CreateRolePage from "src/screens/Roles/Create";
import DetailRolePage from "src/screens/Roles/Detail";

const RolesPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  const classes = useCateforiesStyles(props);

  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["roles", subMenuKey || "list-roles"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  const contentElement = useMemo(() => {
    switch (subMenuKey) {
      case "list-roles":
        return <ListRolesPage />;
      case "create-role":
        return <CreateRolePage />;
      case "detail-role":
        return <DetailRolePage />;
      default:
        return <ListRolesPage />;
    }
  }, [subMenuKey]);

  return (
    <Flex width={"100%"} height={"100%"} pl={"266px"} className={classes.root}>
      {contentElement}
    </Flex>
  );
};

export default RolesPage;
