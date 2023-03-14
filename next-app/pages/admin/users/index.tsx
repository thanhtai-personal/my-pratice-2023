import { useEffect, useMemo } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";
import { useCateforiesStyles } from "./styles";
import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";
import ListUsersPage from "src/screens/Users/List";
import CreateUserPage from "src/screens/Users/Create";
import DetailUserPage from "src/screens/Users/Detail";

const UsersPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  const classes = useCateforiesStyles(props);

  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["users", subMenuKey || "list-users"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  const contentElement = useMemo(() => {
    switch (subMenuKey) {
      case "list-users":
        return <ListUsersPage />;
      case "create-user":
        return <CreateUserPage />;
      case "detail-user":
        return <DetailUserPage />;
      default:
        return <ListUsersPage />;
    }
  }, [subMenuKey]);

  return (
    <Flex width={"100%"} height={"100%"} pl={"266px"} className={classes.root}>
      {contentElement}
    </Flex>
  );
};

export default UsersPage;
