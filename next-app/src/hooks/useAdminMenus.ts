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
          onClick: (router, item) => {
            router.push("/admin/dashboard");
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
          onClick: (router, item) => {
            router.push("/admin/products");
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-products",
              key: "list-products",
              icon: "",
              name: "Search",
              onClick: (router, item) => {
                router.push("/admin/products?sMenu=list-products");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-product",
              key: "create-product",
              icon: "",
              name: "Create",
              onClick: (router, item) => {
                router.push("/admin/products?sMenu=create-product");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-product",
              key: "detail-product",
              icon: "",
              name: "Detail",
              onClick: (router, item) => {
                router.push("/admin/products?sMenu=detail-product");
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
          onClick: (router, item) => {
            router.push("/admin/categories");
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-categories",
              key: "list-categories",
              icon: "",
              name: "Search",
              onClick: (router, item) => {
                router.push("/admin/categories?sMenu=list-categories");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-category",
              key: "create-category",
              icon: "",
              name: "Create",
              onClick: (router, item) => {
                router.push("/admin/categories?sMenu=create-category");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-category",
              key: "detail-category",
              icon: "",
              name: "Detail",
              onClick: (router, item) => {
                router.push("/admin/categories?sMenu=detail-category");
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
          onClick: (router, item) => {
            router.push("/admin/orders");
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [
            {
              id: "list-orders",
              key: "list-orders",
              icon: "",
              name: "Search",
              onClick: (router, item) => {
                router.push("/admin/orders?sMenu=list-orders");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-order",
              key: "create-order",
              icon: "",
              name: "Create",
              onClick: (router, item) => {
                router.push("/admin/orders?sMenu=create-order");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-order",
              key: "detail-order",
              icon: "",
              name: "Detail",
              onClick: (router, item) => {
                router.push("/admin/orders?sMenu=detail-order");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
          ],
        },
        {
          id: "images",
          key: "images",
          icon: "",
          name: "Images",
          onClick: (router, item) => {
            router.push("/admin/images");
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          alignment: AlignmentType.left,
          subItems: [],
        },
      ],
      dividerList: [
        {
          id: "users",
          key: "users",
          alignment: AlignmentType.left,
          icon: "",
          name: "Users",
          onClick: (router, item) => {
            router.push("/admin/users");
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          subItems: [
            {
              id: "list-users",
              key: "list-users",
              icon: "",
              name: "Search",
              onClick: (router, item) => {
                router.push("/admin/users");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-user",
              key: "create-user",
              icon: "",
              name: "Create",
              onClick: (router, item) => {
                router.push("/admin/users?sMenu=create-user");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-user",
              key: "detail-user",
              icon: "",
              name: "Detail",
              onClick: (router, item) => {
                router.push("/admin/users?sMenu=detail-user");
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
          onClick: (router, item) => {
            router.push("/admin/roles");
          },
          isActive: (item, activeMenus = []) => activeMenus.includes(item.key),
          subItems: [
            {
              id: "list-roles",
              key: "list-roles",
              icon: "",
              name: "Search",
              onClick: (router, item) => {
                router.push("/admin/roles?sMenu=list-roles");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "create-role",
              key: "create-role",
              icon: "",
              name: "Create",
              onClick: (router, item) => {
                router.push("/admin/roles?sMenu=create-role");
              },
              isActive: (item, activeMenus = []) =>
                activeMenus.includes(item.key),
            },
            {
              id: "detail-role",
              key: "detail-role",
              icon: "",
              name: "Detail",
              onClick: (router, item) => {
                router.push("/admin/roles?sMenu=detail-role");
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
