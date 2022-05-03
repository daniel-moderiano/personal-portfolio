import './styles/output.css'

// Show scroll indicator when full scrolled top
const scrollIndicator = document.querySelector('#seework');

const checkScroll = () => {
  if (window.scrollY === 0) {   // user has scrolled all the way up
    scrollIndicator.classList.add('opacity-100');
    scrollIndicator.classList.remove('opacity-0');
    scrollIndicator.classList.remove('bottom-0');
    scrollIndicator.classList.add('bottom-4');
  } else {
    scrollIndicator.classList.add('opacity-0');
    scrollIndicator.classList.remove('opacity-100');
    scrollIndicator.classList.add('bottom-0');
    scrollIndicator.classList.remove('bottom-4');
  }
};

window.addEventListener('scroll', checkScroll);