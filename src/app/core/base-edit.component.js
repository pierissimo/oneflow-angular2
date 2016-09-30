export class BaseEdit {
  constructor(resourceName) {
    this.resourceName = resourceName;
    this.resource = {};
  }

  save() {
    alert(`this is from baseEdit \nresourceName: ${this.resourceName} \ndata: ${JSON.stringify(this.resource)}`);
  }
}
