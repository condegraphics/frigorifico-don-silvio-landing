const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mainNav = document.querySelector(".main-nav");

document.documentElement.classList.add("has-js");

if (menuToggle && menuClose && mainNav) {
  const setMenuOpen = (isOpen, returnFocus = false) => {
    mainNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación",
    );
    document.body.classList.toggle("menu-open", isOpen);

    if (isOpen) {
      menuClose.focus();
    } else if (returnFocus) {
      menuToggle.focus();
    }
  };

  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });

  menuClose.addEventListener("click", () => setMenuOpen(false, true));

  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a[href]")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!mainNav.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      event.preventDefault();
      setMenuOpen(false, true);
      return;
    }

    if (event.key !== "Tab") return;

    const focusableElements = [
      ...mainNav.querySelectorAll('a[href], button:not([disabled])'),
    ];
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && mainNav.classList.contains("is-open")) {
      setMenuOpen(false);
    }
  });
}

const filterButtons = [...document.querySelectorAll("[data-filter]")];
const productCards = [...document.querySelectorAll("[data-category]")];

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle("is-active", isSelected);
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    productCards.forEach((card) => {
      card.hidden = selectedFilter !== "todos" && card.dataset.category !== selectedFilter;
    });
  });

});
