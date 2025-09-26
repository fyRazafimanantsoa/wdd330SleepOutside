import { setLocalStorage, getLocalStorage } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';
import { getParam } from './utils.mjs';

const dataSource = new ProductData('tents');
const productID = getParam('product');

const product = new ProductDetails(productID, dataSource);
product.init();

function addProductToCart(product) {
  const items = getLocalStorage('so-cart') || [];
  items.push(product);
  setLocalStorage('so-cart', items);



async function addToCartHandler(e) {
    const products = await dataSource.findProductById(e.target.dataset.id);
    addProductToCart(products);
}

// add listener to Add to Cart button
document
  .getElementById('addToCart')
  .addEventListener('click', addToCartHandler);

}