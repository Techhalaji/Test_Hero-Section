const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  document.getElementByclassName("linksWrapper").style.display = "none";
  document.getElementByclassName("navMenu").style.display = "block";
});
