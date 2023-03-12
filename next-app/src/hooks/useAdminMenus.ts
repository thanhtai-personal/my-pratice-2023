import { useEffect } from "react";
import { setAppMenu } from "src/actions/layout.actions";
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
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          subItems: [],
          alignment: AlignmentType.left,
        },
        {
          id: "products",
          key: "products",
          icon: "",
          name: "Products",
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-products",
              key: "list-products",
              icon: "",
              name: "Search",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-product",
              key: "create-product",
              icon: "",
              name: "Create",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-product",
              key: "detail-product",
              icon: "",
              name: "Detail",
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
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-categories",
              key: "list-categories",
              icon: "",
              name: "Search",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-category",
              key: "create-category",
              icon: "",
              name: "Create",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-category",
              key: "detail-category",
              icon: "",
              name: "Detail",
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
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-orders",
              key: "list-orders",
              icon: "",
              name: "Search",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-order",
              key: "create-order",
              icon: "",
              name: "Create",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-order",
              key: "detail-order",
              icon: "",
              name: "Detail",
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
          subItems: [
            {
              id: "list-users",
              key: "list-users",
              icon: "",
              name: "Search",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-user",
              key: "create-user",
              icon: "",
              name: "Create",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-user",
              key: "detail-user",
              icon: "",
              name: "Detail",
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
          ],
          icon: "",
          name: "Users",
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
        },
        {
          id: "roles",
          key: "roles",
          alignment: AlignmentType.left,
          subItems: [],
          icon: "",
          name: "Roles",
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
        },
      ],
    });
    return () => {
      setAppMenu({ dividerList: [], menus: [] });
    };
  }, []);
};

export default useAdminMenus;
