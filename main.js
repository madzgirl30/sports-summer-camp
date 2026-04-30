// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// list of camp programs
const campPrograms = [
  'Robotics Relay',
  'Basketball Analytics',
  'Soccer Engineering',
  'Code the Scoreboard',
  'Launch Lab',
  'Speed Science'
];

// print each program to the browser console
for (let i = 0; i < campPrograms.length; i++) {
  console.log('Camp program option ' + (i + 1) + ': ' + campPrograms[i]);
}


const registrationForm = document.getElementById('registrationForm');
const formMessage = document.getElementById('formMessage');
const unsafePreview = document.getElementById('unsafePreview');

if (registrationForm) {
  registrationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const parentName = document.getElementById('parentName').value.trim();
    const email = document.getElementById('email').value.trim();
    const camperName = document.getElementById('camperName').value.trim();
    const camperAge = Number(document.getElementById('camperAge').value);
    const programChoice = document.getElementById('programChoice').value;
    const comment = document.getElementById('comment').value;

    if (camperAge < 8 || camperAge > 13) {
      formMessage.textContent = 'Camp SparkMotion is currently designed for campers ages 8 through 13.';
      formMessage.style.color = 'crimson';
      return;
    } else if (parentName === '' || email === '' || camperName === '' || programChoice === '') {
      formMessage.textContent = 'Please complete all required fields before submitting.';
      formMessage.style.color = 'crimson';
      return;
    } else {
      formMessage.textContent = 'Thank you, ' + parentName + '! ' + camperName + ' is on the interest list for ' + programChoice + '.';
      formMessage.style.color = '#183153';
    }

    unsafePreview.innerHTML = '<strong>Camper question or goal:</strong> ' + comment;
  });
}
