/* DOM ELEMENTS */
const orderBtn = document.querySelector(".nav-btn");
const popup = document.querySelector("#popup");
const closePopup = document.querySelector("#close-popup");

if (orderBtn && popup && closePopup) {
  orderBtn.addEventListener("click", () => {
    popup.style.display = "block";
    setTimeout(() => popup.classList.add("show"), 10);
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
    setTimeout(() => (popup.style.display = "none"), 300);
  });
}

const themeBtn = document.querySelector(".theme-btn");


// (Order Button) 

// Show popup
orderBtn.addEventListener("click", () => {
  popup.style.display = "block";
  setTimeout(() => {
    popup.classList.add("show");
  }, 10);
});

// Hide popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");

  setTimeout(() => {
    popup.style.display = "none";
  }, 300);
});

// SCROLL REVEAL ANIMATION
function revealSections() {
  reveals.forEach((element) => {
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < window.innerHeight - 100) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Run immediately
revealSections();


// DARK MODE TOGGLE

// Toggle dark/light mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});