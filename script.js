// Smooth scrolling for internal links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});
