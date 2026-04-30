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
