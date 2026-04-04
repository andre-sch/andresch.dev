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
    translate(selectedLanguage);
  });
}

function translate(language: string) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (!key || !translations[language]) return;

    element.textContent = translations[language][key];
  });
}

const translations: {
  [language: string]: Record<string, string>;
} = {
  "pt-BR": {
    "header-nav0": "Produtos",
    "header-nav1": "Preços",
    "header-nav2": "Contato",
    "header-theme-alt": "Trocar tema",
    "header-menu-alt": "Menu",
    "hero-title": "Quer vender na internet e não sabe por onde começar?",
    "hero-description":
      "Somos uma agência de software, especializada em criar sites personalizados para atender as necessidades do seu negócio. Desde a concepção do produto até o uso em produção.",
    "hero-primary-button": "Whatsapp",
    "hero-secondary-button": "Email",
    "products-title": "Produtos de Software",
    "products-description":
      "Soluções para problemas clássicos do mundo digital. Os sistemas são construídos de ponta a ponta, o que inclui banco de dados, servidor (back-end), interface (front-end) e infraestrura (hardware).",
    "products-card0-title": "Landing page",
    "products-card0-description":
      "Um site para conversão de clientes com anúncio de produtos, coleta de dados do usuário e redirecionamento para outros serviços.",
    "products-card1-title": "E-commerce",
    "products-card1-description":
      "Um site para vender produtos com catálogo de itens, carrinho e compras.",
    "products-card2-title": "Institucional",
    "products-card2-description":
      "Um site para apresentar uma empresa com produtos, serviços, localização e contato.",
    "products-card3-title": "Portfólio",
    "products-card3-description":
      "Um site para apresentar a experiência de um profissional, suas habilidades, projetos e meios de contato.",
    "products-card4-title": "Plataforma de ensino",
    "products-card4-description":
      "Um site para vender cursos com videos, materiais de apoio e exercícios.",
    "pricing-title": "Preços",
    "pricing-description":
      "Os valores podem variar com base nos requisitos do projeto, previamente acordado no orçamento do serviço.",
    "pricing-plan-cta": "Comece agora",
    "pricing-plan-next-button": "Próximo",
    "pricing-plan-prev-button": "Anterior",
    "pricing-essential-plan-title": "Essencial",
    "pricing-essential-plan-description": "Landing pages e portfólios.",
    "pricing-essential-plan-price": "R$ 1000,00",
    "pricing-essential-plans-feature0": "1-3 páginas",
    "pricing-essential-plans-feature1": "Sem servidor e banco de dados",
    "pricing-essential-plans-feature2": "Integração com emails, formulários e redes sociais",
    "pricing-essential-plans-feature3": "Alto desempenho",
    "pricing-essential-plans-feature4": "Disponível, seguro e confiável",
    "pricing-essential-plans-feature5": "Compatível a computadores, tablets e celulares",
    "pricing-essential-plans-feature6": "Inclui suporte técnico e contrato de manutenção",
    "pricing-enterprise-plan-title": "Empresarial",
    "pricing-enterprise-plan-description": "Site institucional, e-commerce e plataforma de ensino.",
    "pricing-enterprise-plan-price": "R$ 2000,00",
    "pricing-enterprise-plans-feature0": "5-10 páginas",
    "pricing-enterprise-plans-feature1": "Servidor e banco de dados",
    "pricing-enterprise-plans-feature2": "Integração com CRMs, ERPs e sistemas de pagamento",
    "pricing-enterprise-plans-feature3": "Alto desempenho",
    "pricing-enterprise-plans-feature4": "Disponível, seguro e confiável",
    "pricing-enterprise-plans-feature5": "Compatível a computadores, tablets e celulares",
    "pricing-enterprise-plans-feature6": "Inclui suporte técnico e contrato de manutenção",
    "pricing-custom-plan-title": "Personalizado",
    "pricing-custom-plan-description": "Sistema feito sobre demanda.",
    "pricing-custom-plan-price": "Custo a definir",
    "pricing-custom-plans-feature0": "Quantidade ilimitada de páginas",
    "pricing-custom-plans-feature1": "Infraestrutura variável",
    "pricing-custom-plans-feature2": "Integração com qualquer plataforma",
    "pricing-custom-plans-feature3": "Alto desempenho",
    "pricing-custom-plans-feature4": "Disponível, seguro e confiável",
    "pricing-custom-plans-feature5": "Compatível a computadores, tablets e celulares",
    "pricing-custom-plans-feature6": "Inclui suporte técnico e contrato de manutenção",
  },
  "en-US": {
    "header-nav0": "Products",
    "header-nav1": "Pricing",
    "header-nav2": "Contact",
    "header-theme-alt": "Switch theme",
    "header-menu-alt": "Menu",
    "hero-title": "Want to sell online but don’t know where to start?",
    "hero-description":
      "We are a software agency specialized in building custom websites tailored to your business needs — from product design to production deployment.",
    "hero-primary-button": "WhatsApp",
    "hero-secondary-button": "Email",
    "products-title": "Software Products",
    "products-description":
      "Solutions for common digital challenges. Our systems are built end-to-end, including database, server (back-end), interface (front-end), and infrastructure (hardware).",
    "products-card0-title": "Landing Page",
    "products-card0-description":
      "A conversion-focused website featuring product promotion, user data collection, and redirection to other services.",
    "products-card1-title": "E-commerce",
    "products-card1-description":
      "An online store with product catalog, shopping cart, and checkout functionality.",
    "products-card2-title": "Corporate Website",
    "products-card2-description":
      "A website to present a company, including its products, services, location, and contact information.",
    "products-card3-title": "Portfolio",
    "products-card3-description":
      "A website to showcase a professional’s experience, skills, projects, and contact details.",
    "products-card4-title": "Learning Platform",
    "products-card4-description":
      "A platform to sell courses with videos, supporting materials, and exercises.",
    "pricing-title": "Pricing",
    "pricing-description":
      "Prices may vary depending on project requirements, as defined in the service quote.",
    "pricing-plan-cta": "Get started",
    "pricing-plan-next-button": "Next",
    "pricing-plan-prev-button": "Previous",
    "pricing-essential-plan-title": "Essential",
    "pricing-essential-plan-description": "Landing pages and portfolios.",
    "pricing-essential-plan-price": "R$ 1,000.00",
    "pricing-essential-plans-feature0": "1–3 pages",
    "pricing-essential-plans-feature1": "No server or database",
    "pricing-essential-plans-feature2": "Integration with email, forms, and social media",
    "pricing-essential-plans-feature3": "High performance",
    "pricing-essential-plans-feature4": "Reliable, secure, and available",
    "pricing-essential-plans-feature5": "Responsive for desktop, tablet, and mobile",
    "pricing-essential-plans-feature6": "Includes technical support and maintenance contract",
    "pricing-enterprise-plan-title": "Business",
    "pricing-enterprise-plan-description":
      "Corporate websites, e-commerce, and learning platforms.",
    "pricing-enterprise-plan-price": "R$ 2,000.00",
    "pricing-enterprise-plans-feature0": "5–10 pages",
    "pricing-enterprise-plans-feature1": "Server and database included",
    "pricing-enterprise-plans-feature2": "Integration with CRMs, ERPs, and payment systems",
    "pricing-enterprise-plans-feature3": "High performance",
    "pricing-enterprise-plans-feature4": "Reliable, secure, and available",
    "pricing-enterprise-plans-feature5": "Responsive for desktop, tablet, and mobile",
    "pricing-enterprise-plans-feature6": "Includes technical support and maintenance contract",
    "pricing-custom-plan-title": "Custom",
    "pricing-custom-plan-description": "Tailored system based on your needs.",
    "pricing-custom-plan-price": "Indetermined",
    "pricing-custom-plans-feature0": "Unlimited pages",
    "pricing-custom-plans-feature1": "Flexible infrastructure",
    "pricing-custom-plans-feature2": "Integration with any platform",
    "pricing-custom-plans-feature3": "High performance",
    "pricing-custom-plans-feature4": "Reliable, secure, and available",
    "pricing-custom-plans-feature5": "Responsive for desktop, tablet, and mobile",
    "pricing-custom-plans-feature6": "Includes technical support and maintenance contract",
  },
  "es-ES": {
    "header-nav0": "Productos",
    "header-nav1": "Precios",
    "header-nav2": "Contacto",
    "header-theme-alt": "Cambiar tema",
    "header-menu-alt": "Menú",
    "hero-title": "¿Quieres vender en internet pero no sabes por dónde empezar?",
    "hero-description":
      "Somos una agencia de software especializada en crear sitios web personalizados según las necesidades de tu negocio, desde el diseño del producto hasta su puesta en producción.",
    "hero-primary-button": "WhatsApp",
    "hero-secondary-button": "Correo electrónico",
    "products-title": "Productos de Software",
    "products-description":
      "Soluciones para los desafíos más comunes del mundo digital. Nuestros sistemas se desarrollan de principio a fin, incluyendo base de datos, servidor (back-end), interfaz (front-end) e infraestructura (hardware).",
    "products-card0-title": "Landing Page",
    "products-card0-description":
      "Un sitio web enfocado en la conversión, con promoción de productos, captación de datos de usuarios y redirección a otros servicios.",
    "products-card1-title": "E-commerce",
    "products-card1-description":
      "Una tienda online con catálogo de productos, carrito de compra y proceso de pago.",
    "products-card2-title": "Sitio Corporativo",
    "products-card2-description":
      "Un sitio web para presentar una empresa, incluyendo productos, servicios, ubicación y contacto.",
    "products-card3-title": "Portafolio",
    "products-card3-description":
      "Un sitio web para mostrar la experiencia profesional, habilidades, proyectos y formas de contacto.",
    "products-card4-title": "Plataforma Educativa",
    "products-card4-description":
      "Una plataforma para vender cursos con vídeos, materiales de apoyo y ejercicios.",
    "pricing-title": "Precios",
    "pricing-description":
      "Los precios pueden variar según los requisitos del proyecto, definidos previamente en el presupuesto del servicio.",
    "pricing-plan-cta": "Comenzar ahora",
    "pricing-plan-next-button": "Siguiente",
    "pricing-plan-prev-button": "Anterior",
    "pricing-essential-plan-title": "Esencial",
    "pricing-essential-plan-description": "Landing pages y portafolios.",
    "pricing-essential-plan-price": "R$ 1.000,00",
    "pricing-essential-plans-feature0": "1–3 páginas",
    "pricing-essential-plans-feature1": "Sin servidor ni base de datos",
    "pricing-essential-plans-feature2": "Integración con correos, formularios y redes sociales",
    "pricing-essential-plans-feature3": "Alto rendimiento",
    "pricing-essential-plans-feature4": "Seguro, confiable y disponible",
    "pricing-essential-plans-feature5": "Compatible con ordenador, tablet y móvil",
    "pricing-essential-plans-feature6": "Incluye soporte técnico y mantenimiento",
    "pricing-enterprise-plan-title": "Empresarial",
    "pricing-enterprise-plan-description":
      "Sitios corporativos, e-commerce y plataformas educativas.",
    "pricing-enterprise-plan-price": "R$ 2.000,00",
    "pricing-enterprise-plans-feature0": "5–10 páginas",
    "pricing-enterprise-plans-feature1": "Servidor y base de datos incluidos",
    "pricing-enterprise-plans-feature2": "Integración con CRM, ERP y sistemas de pago",
    "pricing-enterprise-plans-feature3": "Alto rendimiento",
    "pricing-enterprise-plans-feature4": "Seguro, confiable y disponible",
    "pricing-enterprise-plans-feature5": "Compatible con ordenador, tablet y móvil",
    "pricing-enterprise-plans-feature6": "Incluye soporte técnico y mantenimiento",
    "pricing-custom-plan-title": "Personalizado",
    "pricing-custom-plan-description": "Sistema desarrollado a medida.",
    "pricing-custom-plan-price": "A definir",
    "pricing-custom-plans-feature0": "Páginas ilimitadas",
    "pricing-custom-plans-feature1": "Infraestructura flexible",
    "pricing-custom-plans-feature2": "Integración con cualquier plataforma",
    "pricing-custom-plans-feature3": "Alto rendimiento",
    "pricing-custom-plans-feature4": "Seguro, confiable y disponible",
    "pricing-custom-plans-feature5": "Compatible con ordenador, tablet y móvil",
    "pricing-custom-plans-feature6": "Incluye soporte técnico y mantenimiento",
  },
};
