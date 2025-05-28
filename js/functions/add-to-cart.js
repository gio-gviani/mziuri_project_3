import { addCards } from "./add-cards.js";
import { sumOfCart } from "./sum-of-cart.js";
import { cartCardTamplate, cardInfo } from "../vareables.js";

async function addCard() {
  console.log(document.cookie, "cookie");

  const cartItems = document.cookie
    .split("; ")
    .filter((cookie) => cookie.startsWith("cartItems="))[0]
    .split("=")[1]
    .split(",");

  const cartCardInfo = [];

  cardInfo.products.forEach((info) => {
    if (cartItems.includes(`${info.id}`)) {
      cartCardInfo.push(info);
    }
  });

  const cart = document.querySelector("#cart-section-products-list");
  cart.innerHTML = "";
  addCards(
    cartCardInfo,
    cartCardTamplate,
    "cart-section-products-list",
    cartCardInfo.length,
    ""
  );
  deleteFromCart();
  sumOfCart();
}

export async function addToCart() {
  const addToCartButtons = document.querySelectorAll(
    ".add-to-cart-product-btn"
  );
  addCard();

  addToCartButtons.forEach(async (button) => {
    button.addEventListener("click", async () => {
      const productId = button.id.split("-").pop();
      if (!document.cookie.includes("cartItems")) {
        document.cookie = `cartItems=${productId}; path=/; max-age=3600`; // Set cookie if it doesn't exist
      } else {
        console.log(`Button clicked: ${productId}`);
        const nowInCart = document.cookie
          .split("; ")
          .filter((cookie) => cookie.startsWith("cartItems="))[0]
          .split("=")[1]
          .split(",");

        if (!nowInCart.includes(productId)) {
          nowInCart.push(`${productId}`);
        }

        document.cookie = `cartItems=${[nowInCart]}; path=/; max-age=3600`;
        console.log("Cookie set:", document.cookie);
      }
      addCard();
    });
  });
}
export async function deleteFromCart() {
  const deleteFromCartButtons = document.querySelectorAll(
    ".cart-section-product-card-remove-btn"
  );

  deleteFromCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.id.split("-").pop();
      const nowInCart = document.cookie
        .split("; ")
        .filter((cookie) => cookie.startsWith("cartItems="))[0]
        .split("=")[1]
        .split(",");

      const updatedCart = nowInCart.filter((id) => id !== productId);
      document.cookie = `cartItems=${updatedCart.join(
        ","
      )}; path=/; max-age=3600`;

      addCard();
    });
  });
}
