import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";
import useSearchParams from "src/hooks/useSearchParams";

const RolesPage = (props) => {
  const searchParams = useSearchParams();
  const subMenuKey = searchParams.get("sMenu");
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["roles", subMenuKey || "list-roles"]);
    return () => setActiveMenu([]);
  }, [subMenuKey]);

  return <Flex>Roles page</Flex>;
};

export default RolesPage;
