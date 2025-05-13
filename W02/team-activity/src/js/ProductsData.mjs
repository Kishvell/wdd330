function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  async getData() {
    const data = await fetch(this.path).then(convertToJson);
    return data;
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id) || null; // Avoid undefined errors
  }
}
