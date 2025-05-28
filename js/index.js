import { openOffcanvas } from "./functions/open-offcanvas.js";
import { addCards } from "./functions/add-cards.js";
import { addToCart } from "./functions/add-to-cart.js";
import { deleteFromCart } from "./functions/add-to-cart.js";


openOffcanvas(
  "cart-section",
  "header-main-bar-meta-cart",
  "cart-section-close-btn"
);

const cardTamplate = ` <div class="product-card">
  <img src="{{image}}" alt="" />
  <span class="product-card-sale">{{sale}}</span>
  <h5>{{title}}</h5>
  <p>
    {{description}}
  </p>

  <div class="product-card-reviews-box">
    <img src="img/svg/star-icon.svg" class="product-card-reviews-icon" alt="" />
    <img src="img/svg/star-icon.svg" class="product-card-reviews-icon" alt="" />
    <img src="img/svg/star-icon.svg" class="product-card-reviews-icon" alt="" />
    <img src="img/svg/star-icon.svg" class="product-card-reviews-icon" alt="" />
    <img src="img/svg/star-icon.svg" class="product-card-reviews-icon" alt="" />
    <p>( 1 review )</p>
  </div>
  <div class="product-card-price-box">
    <span>{{price}}$</span>
    <p>{{oldPrice}}$</p>
  </div>

  <button class="add-to-cart-product-btn" id="add-to-cart-btn-{{id}}">add to cart</button>
</div>
 `;

const response = await fetch("js/data/card-info.json");
const cardInfo = await response.json();

// console.log("Card Info:", cardInfo);

addCards(cardInfo.products, cardTamplate, "feature-products-list", 3, "col-4");
addCards(cardInfo.products, cardTamplate, "popular-products-list", 5, "col");

addToCart();
deleteFromCart();

