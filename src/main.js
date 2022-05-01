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


// hamburgerBtn.addEventListener('click', toggleNav);

// Event propagation
navList.addEventListener('click', (e) => {
  if (e.target.nodeName === 'A') {   // nav menu link has been clicked
    toggleNav();
  }
})

// This has the effect of creating an 'outside click' close function, since the veil will only receive click events while the menu is open
// veil.addEventListener('click', toggleNav);


// HEADER SCROLL
const header = document.querySelector('nav')

const showHeader = () => {
  header.classList.remove('-top-[50px]');
  header.classList.add('top-0');
};

const hideHeader = () => {
  header.classList.remove('top-0');
  header.classList.add('-top-[50px]');
}

// Initialise all direction and scroll variables here
let previousScroll = window.scrollY;    // initialised the 'previous' scroll to the current window position
let currentScroll;
// 0 = initial, 1 = scrolling up, 2 = scrolling down
let direction = 0;
let previousDirection = 0;


// Hide or show header based on the current direction of scroll
const toggleHeader = (direction, currentScroll) => {
  // Do not toggle header until the current scroll value is greater than the height of the header (50px)
  if (direction === 2) {     // User is scrolling down
    hideHeader();
  }
  else if (direction === 1) {   // User is scrolling up; show header
    showHeader();
  }

  // Reset previous direction. This will avoid calling toggleHeader unneccessarily if user continues scrolling in same direction
  previousDirection = direction;
}

// Judge the direction of scroll based on window scroll position relative to starting/previous scroll
const checkScroll = () => {  
  // Only initialise current scroll to window position at the time of calling checkScroll function
  currentScroll = window.scrollY;

  if (currentScroll > previousScroll) {   // user is scrolling down, set direction accordingly
    direction = 2;
  } else if (currentScroll < previousScroll) {    // user is scrolling up, set direction accordingly
    direction = 1;
  }

  // Only toggle header when there is a change in direction
  if (direction !== previousDirection) {
    toggleHeader(direction, currentScroll);
  }

  // Equalise the scrolls here to allow and offset of the two between scroll and scroll event capture
  previousScroll = currentScroll;
};

window.addEventListener('scroll', checkScroll);


