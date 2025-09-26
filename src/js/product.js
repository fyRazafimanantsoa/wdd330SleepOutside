import ProductData from "./ProductData.mjs";
import getParam from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";

const product = new ProductDetails(productId, dataSource);
product.init();

const dataSource = new ProductData("tents");
const productId = getParam("product");

console.log(dataSource.findProductById(productId));

export function addProductToCart(product) {
  
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
