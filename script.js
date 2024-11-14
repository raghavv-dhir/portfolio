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
