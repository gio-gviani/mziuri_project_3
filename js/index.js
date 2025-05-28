import { openOffcanvas } from "./functions/open-offcanvas.js";
import { addCards } from "./functions/add-cards.js";
import { addToCart } from "./functions/add-to-cart.js";
import { deleteFromCart } from "./functions/add-to-cart.js";
import { cardTamplate, cardInfo } from "./vareables.js";
import { popup } from "./functions/popup.js";

openOffcanvas(
  "cart-section",
  "header-main-bar-meta-cart",
  "cart-section-close-btn"
);
addCards(cardInfo.products, cardTamplate, "feature-products-list", 3, "col-4");
addCards(cardInfo.products, cardTamplate, "popular-products-list", 5, "col");
addToCart();
deleteFromCart();
popup();
