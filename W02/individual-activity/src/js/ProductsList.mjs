export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const products = await this.dataSource.getData();
    this.renderList(products);
  }

  renderList(products) {
    renderListWithTemplate(productCardTemplate, this.listElement, products);
  }
}
