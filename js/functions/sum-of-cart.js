export function sumOfCart() {
  const sumText = document.querySelector("#cart-section-check-out-sum");
  const allProds = document.querySelectorAll(".cart-section-product-card");

 
  let totalSum = 0;
  allProds.forEach((el) => {
    const priceElement = el.querySelector(".cart-section-product-card-price");
    if (priceElement) {
      const price = parseFloat(
        priceElement.textContent.replace('$', "")
      );
      if (!isNaN(price)) {
        totalSum += price;
      }
    }
  });
  sumText.textContent = `Total: $${totalSum}`;
}
