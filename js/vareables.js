export const cardTamplate = ` <div class="product-card">
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
export const cardInfo = await response.json();


 export const cartCardTamplate = `<div class="cart-section-product-card" id="cart-section-product-card-{{id}}">
<img src="{{image}}" alt="" />
<div class="cart-section-product-card-info-box">
  <h5>{{title}}</h5>
  <p class="cart-section-product-card-price">{{price}}$</p>
</div>
<button class="cart-section-product-card-remove-btn" id="cart-section-product-card-remove-btn-{{id}}">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"
  >
    <path
      d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"
    />
  </svg>
</button>
</div>
`;