const navToggle = document.querySelector(".nav-toggle");
const navToggleI = document.querySelector(".nav-toggle i");
const navMobile = document.querySelector(".nav_links_mobile");
// const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener("click", () => {
  navMobile.classList.toggle("show");
  /* once navMobile contains the class "show" */
  const isClose = navMobile.classList.contains("show");

  //   if (isClose === true) {
  //     console.log("harley is gae");
  //   } else {
  //     console.log("harley is too shy");
  //   }

  // isClose ? console.log("harley is gae") : console.log("harley is too shy");

  navToggleI.classList = isClose ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// document.addEventListener('click', (event) => {
//     if (!navLinks.contains(event.target) && !navToggle.contains(event.target)) {
//         navLinks.classList.remove('show');
//     }
// });
