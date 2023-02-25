import { createContext, useContext } from "react";
import Store from "store";

const depsContainerCtx = createContext(Store.getInstance());

const useDepsContainer = () => useContext(depsContainerCtx);

export default useDepsContainer;
