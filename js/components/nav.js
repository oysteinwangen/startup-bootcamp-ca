export function mobileNav() {
  const mainNavLinks = document.querySelector(".main-nav__links");
  const navToggle = document.querySelector(".mobile-nav-toggle");
  let navLink = document.querySelectorAll(".nav-link");

  console.log(navLink);

  navLink.forEach(function (i) {
    i.addEventListener("click", function () {
      console.log(i);
      mainNavLinks.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    });
  });

  navToggle.addEventListener("click", () => {
    const visibility = mainNavLinks.getAttribute("data-visible");

    if (visibility === "false") {
      mainNavLinks.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      mainNavLinks.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
}
