import DepsContainer from "./depsContainer";
import EventEmitter from "events";

export const eventEmitter = new EventEmitter();

class BaseModel {
  public depsContainer: DepsContainer;

  protected makeReducer = (reducers: Array<{ type: string; handler: any }>) => {
    reducers.forEach((reducer) => {
      const handler = (data: any) => {
        reducer.handler(data);
      };
      eventEmitter.on(reducer.type, handler);
    });
  };
  public constructor(depsContainer: DepsContainer) {
    this.depsContainer = depsContainer;
  }
}

export default BaseModel;
