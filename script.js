const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector("#navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    document.body.classList.toggle("is-menu-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      document.body.classList.remove("is-menu-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const quoteForm = document.querySelector("#quoteForm");
const formStatus = document.querySelector("#formStatus");

if (quoteForm && formStatus) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thank you. Your inquiry is ready for the BUILD TECH team.";
    quoteForm.reset();
  });
}

const workItems = document.querySelectorAll(".work-item");

workItems.forEach((item) => {
  const button = item.querySelector(".work-list-head");
  const icon = button?.querySelector("span");

  button?.addEventListener("click", () => {
    workItems.forEach((otherItem) => {
      const otherButton = otherItem.querySelector(".work-list-head");
      const otherIcon = otherButton?.querySelector("span");
      const isCurrent = otherItem === item;

      otherItem.classList.toggle("is-open", isCurrent);
      otherButton?.setAttribute("aria-expanded", String(isCurrent));
      if (otherIcon) otherIcon.textContent = isCurrent ? "−" : "+";
    });

    if (icon) icon.textContent = "−";
  });
});

const animatedSelectors = [
  ".banner-about-media",
  ".banner-about-copy",
  ".intro-copy",
  ".logo-card",
  ".promise-row article",
  ".center-head",
  ".service-card",
  ".dark-grid > div",
  ".mission-list article",
  ".global-grid > div",
  ".map",
  ".brands h2",
  ".brand-marquee",
  ".expertise-grid article",
  ".section-head",
  ".steps-row article",
  ".work-copy",
  ".work-visual",
  ".projects .eyebrow",
  ".projects h2",
  ".project-collage img",
  ".quote-copy",
  ".quote-form",
  ".bottom-cta .container",
  ".footer-help",
  ".footer-grid > div"
];

const animatedElements = document.querySelectorAll(animatedSelectors.join(","));
const serviceCards = [...document.querySelectorAll(".service-card")];

animatedElements.forEach((element, index) => {
  element.classList.add("animate-on-scroll");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 210}ms`);

  if (element.matches(".service-card")) {
    const cardIndex = serviceCards.indexOf(element);
    const revealClasses = ["reveal-left", "reveal-zoom", "reveal-right"];
    element.style.setProperty("--reveal-delay", `${cardIndex * 160}ms`);
    element.classList.add(revealClasses[cardIndex % revealClasses.length]);
    return;
  }

  if (element.matches(".banner-about-media, .logo-card, .map, .work-visual, .project-collage img, .brand-marquee")) {
    element.classList.add("reveal-zoom");
    return;
  }

  if (element.matches(".banner-about-copy, .mission-list article, .quote-form, .footer-grid > div:nth-child(even)")) {
    element.classList.add("reveal-right");
    return;
  }

  if (element.matches(".intro-copy, .dark-grid > div:first-child, .global-grid > div, .work-copy, .quote-copy, .footer-grid > div:nth-child(odd)")) {
    element.classList.add("reveal-left");
    return;
  }

  if (element.matches(".promise-row article, .expertise-grid article, .steps-row article")) {
    element.classList.add("reveal-zoom");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
);

animatedElements.forEach((element) => {
  revealObserver.observe(element);
});
