import ProductList from "./ProductList.mjs";
import { productCardTemplate } from "./productCardTemplate.mjs";
import { renderListWithTemplate } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const productContainer = document.querySelector("#product-list");
const productData = new ProductData("tents.json");

const productList = new ProductList("tents", productData, productContainer);
productList.init();
