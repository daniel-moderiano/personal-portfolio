import './styles/output.css'

// Add hamburger button functionality
const hamburgerBtn = document.querySelector('#hamburger');
const mainMenu = document.querySelector('nav');
const lineOne = document.querySelector('#line1');
const lineTwo = document.querySelector('#line2');
const lineThree = document.querySelector('#line3');
const veil = document.querySelector('#veil');
const navList = mainMenu.querySelector('ul');

// Hide/show the navigation menu, and update the hamburger button aria-expanded status
const toggleNav = () => {
  mainMenu.classList.toggle('left-0');
  mainMenu.classList.toggle('-left-full');

  // mainMenu.classList.toggle('-left-full');
  // mainMenu.classList.toggle('-top-full');

  // mainMenu.classList.toggle('left-10');
  // mainMenu.classList.toggle('top-12');
  mainMenu.classList.toggle('opacity-100');
  


  // Animate hamburger icon
  lineTwo.classList.toggle('opacity-0');
  lineOne.classList.toggle('rotate-45');
  lineOne.classList.toggle('translate-y-2.5');
  lineThree.classList.toggle('-rotate-45');
  lineThree.classList.toggle('-translate-y-2.5');

  // Darken app background
  veil.classList.toggle('opacity-0');
  veil.classList.toggle('opacity-50');
  veil.classList.toggle('pointer-events-none');

  // Toggle aria expanded based on state at time of clicking btn
  if (hamburgerBtn.ariaExpanded === 'true') {     // menu is about to close   
    hamburgerBtn.ariaExpanded = 'false';
    mainMenu.ariaHidden = 'true';
    mainMenu.classList.add('pointer-events-none');
  } else {    // menu is about to open
    hamburgerBtn.ariaExpanded = 'true';
    mainMenu.ariaHidden = 'false';
    mainMenu.classList.remove('pointer-events-none');
  }
}


hamburgerBtn.addEventListener('click', toggleNav);

// Event propagation
navList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {   // nav menu link has been clicked
    toggleNav();
  }
})

// This has the effect of creating an 'outside click' close function, since the veil will only receive click events while the menu is open
veil.addEventListener('click', toggleNav);
