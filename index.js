const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    document.getElementById('linksWrapper').style.display = 'none'
    document.getElementById('navMenu').style.display = 'block'
   
});
