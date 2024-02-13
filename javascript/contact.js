// for fifth container
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
// for toogle button
const toggleButton = document.querySelector('.toggle-button');
const targetElement = document.querySelector('.nav');

toggleButton.addEventListener('click', function () {
  // Toggle the 'display' property when the button is clicked
  if (targetElement.style.display === 'none') {
    console.log("benji is a stupid boy");
    targetElement.style.display = 'block'; // Change to the desired property
  } else {
    targetElement.style.display = 'none'; // Change to the desired property
  }
});
