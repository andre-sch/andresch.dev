/* Theme */

let isDarkMode = true;

const themeButton = document.querySelector(".theme-button");
themeButton?.addEventListener("click", function toggleTheme() {
  if (isDarkMode) {
    document.body.classList.add("light-theme");
    themeButton.innerHTML = moonIcon;
    isDarkMode = false;
  } else {
    document.body.classList.remove("light-theme");
    themeButton.innerHTML = sunIcon;
    isDarkMode = true;
  }
});

/* Languages */

const languageSelector = document.querySelector(".language-button");
const languageModal = document.querySelector(".language-modal");
const languageModalButtons = document.querySelectorAll(".language-modal button");

languageSelector?.addEventListener("click", function toggleDisplayOfLanguageModal() {
  if (languageModal?.classList.contains("open")) {
    languageModal?.classList.remove("open");
  } else {
    languageModal?.classList.add("open");
  }

  menuModal?.classList.remove("open");
});

for (const button of languageModalButtons) {
  button.addEventListener("click", function SelectLanguage() {
    const selectedLanguage = button.textContent;

    if (languageSelector) {
      languageSelector.innerHTML = selectedLanguage + arrowIcon;
    }

    languageModal?.classList.remove("open");
  });
}

/* Menu */

const menuButton = document.querySelector(".menu-button");
const menuModal = document.querySelector(".menu-modal");
const menuModalLinks = document.querySelectorAll(".menu-modal a");

menuButton?.addEventListener("click", function toggleDisplayOfMenuModal() {
  if (menuModal?.classList.contains("open")) {
    menuModal?.classList.remove("open");
  } else {
    menuModal?.classList.add("open");
  }

  languageModal?.classList.remove("open");
});

window.addEventListener("resize", function closeMenuModalOnResize() {
  if (window.innerWidth > 768) {
    menuModal?.classList.remove("open");
  }
});

for (const link of menuModalLinks) {
  link.addEventListener("click", function closeMenuModal() {
    menuModal?.classList.remove("open");
  });
}

/* Pricing plans */

const pricingPreviousButton = document.querySelector(".pricing-nav-button.previous");
const pricingNextButton = document.querySelector(".pricing-nav-button.next");

window.addEventListener("resize", function resetPricingPlansOrder() {
  if (window.innerWidth > 1152) {
    const pricingCards = document.querySelectorAll(".pricing-card");
    pricingCards.forEach((card, index) => {
      const cardElement = card as HTMLElement;
      cardElement.style.removeProperty("order");

      cardElement.classList.remove("focus");
      if (index === 1) cardElement.classList.add("focus");
    });
  }
});

pricingPreviousButton?.addEventListener("click", function previousPricingPlan() {
  const currentCard = document.querySelector(".pricing-card.focus");
  const parentNode = currentCard?.parentElement;

  if (!currentCard || !parentNode) return;

  const currentIndex = Array.from(parentNode.children).indexOf(currentCard);

  let nextIndex = (currentIndex - 1) % parentNode.children.length;
  if (nextIndex === -1) nextIndex = parentNode.children.length - 1;
  const nextCard = parentNode.children[nextIndex];

  if (!nextCard) return;

  currentCard.classList.remove("focus");
  nextCard.classList.add("focus");

  Array.from(parentNode.children).forEach((card, index) => {
    const cardElement = card as HTMLElement;
    const order = Number(cardElement.style.order || index) + 1;
    cardElement.style.order = String(order % parentNode.children.length);
  });
});

pricingNextButton?.addEventListener("click", function nextPricingPlan() {
  const currentCard = document.querySelector(".pricing-card.focus");
  const parentNode = currentCard?.parentElement;

  if (!currentCard || !parentNode) return;

  const currentIndex = Array.from(parentNode.children).indexOf(currentCard);

  const nextIndex = (currentIndex + 1) % parentNode.children.length;
  const nextCard = parentNode.children[nextIndex];

  if (!nextCard) return;

  currentCard.classList.remove("focus");
  nextCard.classList.add("focus");

  Array.from(parentNode.children).forEach((card, index) => {
    const cardElement = card as HTMLElement;
    let order = Number(cardElement.style.order || index) - 1;
    if (order === -1) order = parentNode.children.length - 1;
    cardElement.style.order = String(order % parentNode.children.length);
  });
});

/* Icons */

const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`;

const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><title>Toggle theme</title><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-star-icon lucide-moon-star"><title>Toggle theme</title><path d="M18 5h4"/><path d="M20 3v4"/><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;
