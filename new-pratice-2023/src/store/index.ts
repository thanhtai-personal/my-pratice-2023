import DepsContainer from "./reducers/depsContainer";

const Store = (function () {
  let store;
  let isDevelopment = process.env.NODE_ENV === "development";

  function InitStore() {
    const depsContainer = new DepsContainer();
    return {
      isDevelopment,
      ...depsContainer,
    };
  }

  return {
    getInstance: function () {
      if (!store) {
        store = InitStore();
      }

      return store;
    },
  };
})();

export default Store;
