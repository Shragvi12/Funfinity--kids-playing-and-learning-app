
  function displayWelcomeName() {
    const name = localStorage.getItem("funfinityUser") || "Champ";
    const nameDisplay = document.getElementById("welcomeName");
    if (nameDisplay) {
      nameDisplay.textContent = name;
    }
  }

  // Fade-in effect on scroll (optional)
  function handleScrollFadeIn() {
    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.onload = () => {
    displayWelcomeName();
    window.addEventListener("scroll", handleScrollFadeIn);
  };


window.addEventListener('scroll', handleScrollFadeIn);
window.addEventListener('DOMContentLoaded', () => {
  displayWelcomeName();
  handleScrollFadeIn();
});
