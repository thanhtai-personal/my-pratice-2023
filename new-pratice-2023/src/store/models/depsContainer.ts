import LayoutDataModel from "./LayoutDataModel";

class DepsContainer {
  public layout: LayoutDataModel;

  public constructor() {
    // Stores
    this.layout = new LayoutDataModel(this);
  }
}

export default DepsContainer;
