export default class ProductData {
  constructor(file) {
    this.file = file;
  }

  async getData() {
    const response = await fetch(`public/${this.file}`);
    return response.json();
  }
}
