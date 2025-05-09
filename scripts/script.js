// 2. Typing Text Animation
const typing = document.getElementById("typing");
const text = "This text is typed with JavaScript!";
let i = 0;
function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// 7. Scroll Reveal
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);

// 10. Sliding Text Reveal
function slideInText() {
  const slideText = document.querySelectorAll(".slide-text");
  slideText.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < window.innerHeight - 50) {
      el.classList.add("active");
    }
  });
}
window.addEventListener("scroll", slideInText);

// 11. Dark Mode Toggle
const toggleBtn = document.getElementById("toggleDark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("bg-gray-900");
  document.body.classList.toggle("text-white");
});
