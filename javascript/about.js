// animation for second container

function handleIntersec(entries, observer) {
    entries.forEach(entry => {
        const target = entry.target;
        if (entry.isIntersecting) {
            target.classList.add('slide-up');
            target.classList.remove('slide-out');
        } 
    });
}

const secondContainerId = document.getElementById('secondConst');
const observer = new IntersectionObserver(handleIntersec, { threshold: 0.5 });
observer.observe(secondConst);

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