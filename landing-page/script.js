// ELEMENTS

const orderBtn = document.querySelector(".nav-btn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const themeBtn = document.querySelector(".theme-btn");
const revealElements = document.querySelectorAll(".reveal");

// POPUP

const openPopup = () => {
  popup?.classList.add("show");
};

const closePopupHandler = () => {
  popup?.classList.remove("show");
};

orderBtn?.addEventListener("click", openPopup);
closePopup?.addEventListener("click", closePopupHandler);

// DARK MODE

// Load saved theme on page refresh
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle theme and save preference
const toggleTheme = () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

themeBtn?.addEventListener("click", toggleTheme);

// SCROLL REVEAL

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});