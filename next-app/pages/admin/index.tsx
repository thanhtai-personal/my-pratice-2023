import Head from "next/head";
import { useEffect } from "react";
import { setActiveMenu } from "src/actions/layout.actions";
import Flex from "src/components/common/Flex";

import useAdminMenus from "src/hooks/useAdminMenus";

const AdminPage = (props) => {
  useAdminMenus();

  useEffect(() => {
    setActiveMenu(["categories", "list-categories"]);
    return () => setActiveMenu([]);
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>dashboard page</Flex>
    </>
  );
};

export default AdminPage;
