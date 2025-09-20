<<<<<<< HEAD

import ProductData from "./ProductData.mjs";
import getParam from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";

const product = new ProductDetails(productId, dataSource);
product.init();

const dataSource = new ProductData("tents");
const productId = getParam("product");

console.log(dataSource.findProductById(productId));

export function addProductToCart(product) {
  
=======
import { getParam } from '../js/utils.mjs';
import ProductData from '../js/ProductData.mjs';
import ProductDetails from '../js/ProductDetails.mjs';

const dataSource = new ProductData('tents');
const productID = getParam('product');

const product = new ProductDetails(productID, dataSource);
product.init();

/*async function addToCartHandler(e) {
    const product = await dataSource.findProductById(e.target.dataset.id);
    addProductToCart(product);
>>>>>>> cb08333 (Week 2 team activities)
}
// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);
*/