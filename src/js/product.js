<<<<<<< HEAD
import { setLocalStorage, getLocalStorage } from "./utils.mjs";
=======
import { setLocalStorage, get } from "./utils.mjs";
>>>>>>> 5c03992a2cb73b9b3c74e57674775244d3bfa89f
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
const productId = getParam('product');

console.log(dataSource.findProductById(productId));

function addProductToCart(product) {
  const items = getLocalStorage("so-cart") || [];
  items.push(product);
  setLocalStorage("so-cart", items);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
