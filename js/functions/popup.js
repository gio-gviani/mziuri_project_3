export function popup() {
  const popup = document.querySelector(".popup");
  const popupCloseBtn = document.querySelector(".popup-close-btn");
  const overlay = document.querySelector("#overlay");

  setTimeout(() => {
    popup.classList.add("active");
    overlay.classList.add("active");
  }, 4000);

  popupCloseBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  });
}
