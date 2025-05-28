export function openOffcanvas(offcanvasId, offcanvasOpenId, offcanvasCloseId) {
  const offcanvas = document.querySelector("#" + offcanvasId);
  const offcanvasOpen = document.querySelector("#" + offcanvasOpenId);
  const offcanvasClose = document.querySelector("#" + offcanvasCloseId);
  const overlay = document.querySelector("#overlay");
  if (!offcanvas || !offcanvasOpen || !offcanvasClose) {
    console.warn("Offcanvas elements not found. Please check the IDs.");
    return;
  } else {
    // console.log(
    //   "Offcanvas elements found:",
    //   offcanvas,
    //   offcanvasOpen,
    //   offcanvasClose
    // );
  }

  offcanvasOpen.addEventListener("click", () => {
    offcanvas.classList.add("opened-offcanvas");
    overlay.classList.add("active");
    console.log("Offcanvas opened");
  });
  offcanvasClose.addEventListener("click", () => {
    offcanvas.classList.remove("opened-offcanvas");
    overlay.classList.remove("active");
    console.log("Offcanvas closed");
  });
}
