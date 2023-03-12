import { useEffect } from "react";
import {
  setActiveMenu,
  setAppMenu,
  updateActiveAlimentMenu,
} from "src/actions/layout.actions";
import { AlignmentType } from "src/components/AppLayout/AppMenu";

const useAdminMenus = () => {
  useEffect(() => {
    setAppMenu({
      menus: [
        {
          id: "dashboard",
          key: "dashboard",
          icon: "",
          name: "Dashboard",
          onClick: () => {
            setActiveMenu(["dashboard"]);
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          subItems: [],
          alignment: AlignmentType.left,
        },
        {
          id: "products",
          key: "products",
          icon: "",
          name: "Products",
          onClick: () => {
            setActiveMenu(["products", "list-products"]);
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-products",
              key: "list-products",
              icon: "",
              name: "Search",
              onClick: () => {
                setActiveMenu(["products", "list-products"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-product",
              key: "create-product",
              icon: "",
              name: "Create",
              onClick: () => {
                setActiveMenu(["products", "create-product"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-product",
              key: "detail-product",
              icon: "",
              name: "Detail",
              onClick: () => {
                setActiveMenu(["products", "detail-product"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
          ],
        },
        {
          id: "categories",
          key: "categories",
          icon: "",
          name: "Categories",
          onClick: () => {
            setActiveMenu(["categories", "list-categories"]);
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-categories",
              key: "list-categories",
              icon: "",
              name: "Search",
              onClick: () => {
                setActiveMenu(["categories", "list-categories"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-category",
              key: "create-category",
              icon: "",
              name: "Create",
              onClick: () => {
                setActiveMenu(["categories", "create-category"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-category",
              key: "detail-category",
              icon: "",
              name: "Detail",
              onClick: () => {
                setActiveMenu(["categories", "detail-category"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
          ],
        },
        {
          id: "orders",
          key: "orders",
          icon: "",
          name: "Orders",
          onClick: () => {
            setActiveMenu(["orders", "list-orders"]);
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-orders",
              key: "list-orders",
              icon: "",
              name: "Search",
              onClick: () => {
                setActiveMenu(["orders", "list-orders"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-order",
              key: "create-order",
              icon: "",
              name: "Create",
              onClick: () => {
                setActiveMenu(["orders", "create-order"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-order",
              key: "detail-order",
              icon: "",
              name: "Detail",
              onClick: () => {
                setActiveMenu(["orders", "detail-order"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
          ],
        },
      ],
      dividerList: [
        {
          id: "users",
          key: "users",
          alignment: AlignmentType.left,
          icon: "",
          name: "Users",
          onClick: () => {
            setActiveMenu(["users", "list-users"]);
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          subItems: [
            {
              id: "list-users",
              key: "list-users",
              icon: "",
              name: "Search",
              onClick: () => {
                setActiveMenu(["users", "list-users"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-user",
              key: "create-user",
              icon: "",
              name: "Create",
              onClick: () => {
                setActiveMenu(["users", "create-user"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-user",
              key: "detail-user",
              icon: "",
              name: "Detail",
              onClick: () => {
                setActiveMenu(["users", "detail-user"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
          ],
        },
        {
          id: "roles",
          key: "roles",
          alignment: AlignmentType.left,
          icon: "",
          name: "Roles",
          onClick: () => {
            setActiveMenu(["roles", "list-roles"]);
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          subItems: [
            {
              id: "list-roles",
              key: "list-roles",
              icon: "",
              name: "Search",
              onClick: () => {
                setActiveMenu(["roles", "list-roles"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-role",
              key: "create-role",
              icon: "",
              name: "Create",
              onClick: () => {
                setActiveMenu(["roles", "create-role"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-role",
              key: "detail-role",
              icon: "",
              name: "Detail",
              onClick: () => {
                setActiveMenu(["roles", "detail-role"]);
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
          ],
        },
      ],
    });
    updateActiveAlimentMenu(AlignmentType.left);
    return () => {
      setAppMenu({ dividerList: [], menus: [] });
      updateActiveAlimentMenu("");
    };
  }, []);
};

export default useAdminMenus;
