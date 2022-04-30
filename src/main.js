import './styles/output.css'

console.log('Working');

// Add hamburger button functionality
const hamburgerBtn = document.querySelector('#hamburger');
const mainMenu = document.querySelector('nav');

// Hide/show the navigation menu, and update the hamburger button aria-expanded status
const toggleNav = () => {
  mainMenu.classList.toggle('hidden');

  // Toggle aria expanded based on state at time of clicking btn
  if (hamburgerBtn.ariaExpanded === 'true') {    
    hamburgerBtn.ariaExpanded = 'false';
  } else {
    hamburgerBtn.ariaExpanded = 'true';
  }
}

hamburgerBtn.addEventListener('click', toggleNav);
