import Store from "store";
import { eventEmitter } from "store/models/BaseModel";

interface ActionProps {
  type: "string";
  data: any;
}

const Dispatcher = (function () {
  let instant;

  function InitDispatcher() {
    return {
      dispatch: (actionProps: ActionProps) => {
        eventEmitter.emit(actionProps.type, actionProps.data);
      },
      getState: (selector: Function) => {
        return selector(Store.getInstance().data);
      },
    };
  }

  return {
    getInstance: function () {
      if (!instant) {
        instant = InitDispatcher();
      }

      return instant;
    },
  };
})();

const dispatchInstant = Dispatcher.getInstance();

export const dispatch = dispatchInstant.dispatch;
export const getState = dispatchInstant.getState;
