document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector("#menu");
  const closeButton = document.querySelector("#menuX");
  const menuBox = document.querySelector("#menuBox");

  function openMenu() {
    menuBox.classList.add("active");
    menuButton.style.display = "none";
    closeButton.style.display = "block";
  }

  function closeMenu() {
    menuBox.classList.remove("active");
    closeButton.style.display = "none";
    menuButton.style.display = "block";
  }

  menuButton.addEventListener("click", openMenu);
  closeButton.addEventListener("click", closeMenu);

  document.addEventListener("click", function (event) {
    const isClickInside =
      menuBox.contains(event.target) ||
      menuButton.contains(event.target) ||
      closeButton.contains(event.target);

    if (!isClickInside) {
      closeMenu();
    }
  });
});
