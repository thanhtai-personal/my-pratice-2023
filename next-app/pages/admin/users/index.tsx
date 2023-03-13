import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";

const UsersPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["users", subMenuKey || "list-users"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  return <Flex>users page</Flex>;
};

export default UsersPage;
