import DepsContainer from "./models/depsContainer";

const Store = (function () {
  let store;
  let isDevelopment = process.env.NODE_ENV === "development";

  function InitStore() {
    const depsContainer = new DepsContainer();
    // const depsContainerCtx = createContext(depsContainer);
    // const data = useContext(depsContainerCtx);
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
