export function addCards(
  cardInfo,
  cardTamplate,
  containerId,
  cardCount,
  colClass = "col-4"
) {
  const container = document.querySelector("#" + containerId);
  if (!container) {
    console.warn("Container not found. Please check the ID.");
    return;
  } else {
    // console.log("Container found:", container);
  }

  let i = 0;
  cardInfo.forEach((card) => {
    if (i >= cardCount) return;
    const cardElement = document.createElement("div");
    cardElement.className = colClass;
    cardElement.innerHTML = cardTamplate
      .replace("{{image}}", card.image)
      .replace("{{sale}}", card.sale)
      .replace("{{title}}", card.title)
      .replace("{{description}}", card.description)
      .replace("{{price}}", card.price)
      .replace("{{oldPrice}}", card.oldPrice)
      .replaceAll("{{id}}", card.id)
      

    container.appendChild(cardElement);
    i++;
  });
}
