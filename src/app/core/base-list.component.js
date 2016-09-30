export class BaseList {
  constructor(resourceName) {
    this.resourceName = resourceName;
    this.resource = {};
  }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    alert(`this is from baseList \nresourceName: ${this.resourceName}`);
  }
}
