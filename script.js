window.onload = () => {
  const spinner = document.getElementById("loading-spinner");
  spinner.style.display = "none";
};

// Smooth Scrolling to Sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Placeholder functions for button actions
  function seeResume() {
    window.open("https://drive.google.com/file/d/1SWLNA_ShgS3ap13_azcfkEBiSM2pXsnW/view?usp=sharing", "_blank");
  }
  
  function viewProject() {
    alert("Project code viewing feature coming soon!");
  }
  
  function liveDemo() {
    alert("Live demo feature coming soon!");
  }
  // Set current year in footer
document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  yearSpan.textContent = new Date().getFullYear();
});
document.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 0) {
      header.style.backdropFilter = "blur(10px)";
      header.style.backgroundColor = "rgba(31, 34, 51, 0.8)";
  } else {
      header.style.backdropFilter = "none";
      header.style.backgroundColor = "rgba(31, 34, 51, 1)";
  }
});
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";

  sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Adjust for sticky header
      if (pageYOffset >= sectionTop) {
          currentSection = section.getAttribute("id");
      }
  });

  navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
      }
  });
});

