
// animation for second container

function handleIntersec(entries, observer) {
    entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add('slide-up');
            target.classList.remove('slide-out');
        } else {
            target.classList.remove('slide-up');
            target.classList.add('slide-out');
        }
    });
}

const secondContainerId = document.getElementById('secondConst');
const observer = new IntersectionObserver(handleIntersec, { threshold: 0.5 });
observer.observe(secondConst);

// for third container
function handleIntersectionOne(entries, observer) {
    entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add('slide-left');
            target.classList.remove('slide-right');
        } else {
            target.classList.remove('slide-left');
            target.classList.add('slide-right');
        }
    });
}

const slideInElements = document.querySelectorAll('.slide-left-container');
const observerOne = new IntersectionObserver(handleIntersectionOne, { threshold: 0.5 });

slideInElements.forEach(element => {
    observerOne.observe(element);
});

// for forth container

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.remove('slide-out');
        } else {
            target.classList.add('slide-out');
        }
    });
}

const slideUpDownElement = document.getElementById('slideUpDownElement');
const observerd = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
observerd.observe(slideUpDownElement);

// for toogle button
const toggleButton = document.querySelector('.toggle-button');
const targetElement = document.querySelector('#nav');

toggleButton.addEventListener('click', function () {
  // Toggle the 'display' property when the button is clicked
  if (targetElement.style.display === 'none') {
    console.log("benji is a stupid boy");
    targetElement.style.display = 'block'; // Change to the desired property
  } else {
    targetElement.style.display = 'none'; // Change to the desired property
  }
});