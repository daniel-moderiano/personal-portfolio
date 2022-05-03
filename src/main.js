import './styles/output.css'


// HEADER SCROLL
const header = document.querySelector('header');

const showHeader = () => {
  header.classList.remove('-top-[50px]');
  header.classList.add('top-0');
};

const hideHeader = () => {
  header.classList.remove('top-0');
  header.classList.add('-top-[50px]');
};

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

// window.addEventListener('scroll', checkScroll);

// Show scroll indicator when full scrolled top
const scrollIndicator = document.querySelector('#seework');

const checkPosition = () => {
  if (window.scrollY === 0) {   // user has scrolled all the way up
    scrollIndicator.classList.add('opacity-100');
    scrollIndicator.classList.remove('opacity-0');
    scrollIndicator.classList.remove('bottom-0');
    scrollIndicator.classList.add('bottom-4');
  } else {
    scrollIndicator.classList.remove('opacity-0');
    scrollIndicator.classList.add('opacity-0');
    scrollIndicator.classList.remove('opacity-100');
    scrollIndicator.classList.add('bottom-0');
    scrollIndicator.classList.remove('bottom-4');
  }
};

window.addEventListener('scroll', checkPosition);