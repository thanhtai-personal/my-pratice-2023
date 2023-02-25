import { createTable } from "components/common/Table";
import { createLoading } from "components/common/Loading";
import { createListItems } from "components/common/List";

export const Products = {
  TABLE: "TABLE",
  LOADING: "LOADING",
  LISTITEM: "LISTITEM",
} as const;

type ProductType = typeof Products[keyof typeof Products];

interface ProductPropsType {
  type: ProductType;
  id?: string;
  createProps?: any;
}

const Factory = (function () {
  let instance;
  let isDevelopment = process.env.NODE_ENV === "development";

  function init() {
    return {
      createProduct: function (productProps: ProductPropsType) {
        const productId =
          productProps.id || parseInt((Math.random() * 100000000).toString());
        if (isDevelopment) {
          console.log(
            `FACTORY is creating a ${productProps.type} with ID ${productId}`
          );
        }
        switch (productProps.type) {
          case Products.TABLE: {
            return createTable({
              id: productId,
              ...(productProps.createProps || {}),
            });
          }
          case Products.LOADING: {
            return createLoading({
              id: productId,
              ...(productProps.createProps || {}),
            });
          }
          case Products.LISTITEM: {
            return createListItems({
              id: productId,
              ...(productProps.createProps || {}),
            });
          }
          default: {
            throw "invalid product types";
          }
        }
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
})();

export default Factory.getInstance();
