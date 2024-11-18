window.onload = () => {
  const spinner = document.getElementById("loading-spinner");
  spinner.classList.add("hidden");
};

// Smooth Scrolling to Sections
function scrollToSection(id) {
  const targetSection = document.getElementById(id);
  const headerOffset = document.querySelector('.header').offsetHeight; // Get the height of the header
  const elementPosition = targetSection.offsetTop;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' // Smooth scrolling effect
  });
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

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Highlight the active section in the navbar
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Adjust for sticky header
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the section with an offset for the sticky header
    const headerOffset = 70; // Adjust based on your header's height
    const elementPosition = targetSection.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth' // Smooth scrolling
    });
  });
});

