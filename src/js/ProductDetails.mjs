import ProductData from "./ProductData.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

const dataSource = new ProductData("");
const productPage = new ProductDetails(productId, dataSource);

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails(this.product);
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addProductToCart.bind(this));
  }
  addProductToCart(product) {
    const items = getLocalStorage("so-cart") || [];
    items.push(product);
    setLocalStorage("so-cart", items);
  }
  renderProductDetails(product) {
    const productContainer = document.querySelector(".divider");
    productContainer.innerHTML = `<section class="product-detail">
        <h3>${product.Brand.Name}</h3>
        <h2 class="divider">${product.NameWithoutBrand}</h2>
        <img
          class="divider"
          src="${product.Image}"
          alt="${product.Name}"
        />
        <p class="product-card__price">$${product.FinalPrice}</p>
        <p class="product__color">${product.Colors.ColorName}</p>
        <p class="product__description">
          ${product.DescriptionHtmlSimple}
        </p>
        <div class="product-detail__add">
          <button id="addToCart" data-id="${product.Id}">
            Add to Cart
          </button>
        </div>
      </section>;`;
  }
}
