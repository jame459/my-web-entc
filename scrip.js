// Change background color on button click
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
  const randomColor = getRandomColor();
  document.body.style.background = randomColor;
});

// Count clicks on the "Click" button
let clickCount = 0;
const counterBtn = document.getElementById('counterBtn');
const clickCountDisplay = document.getElementById('clickCount');
counterBtn.addEventListener('click', function() {
  clickCount++;
  clickCountDisplay.textContent = clickCount;
});

// Toggle visibility of the hidden message
const toggleMessageBtn = document.getElementById('toggleMessageBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
toggleMessageBtn.addEventListener('click', function() {
  hiddenMessage.classList.toggle('show');
});

// Simple form submission and validation
const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('nameInput');
const nameOutput = document.getElementById('nameOutput');

nameForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = nameInput.value.trim();
  if (name) {
    nameOutput.textContent = "Hello, " + name + "! Welcome to the site.";
    nameInput.value = '';  // Clear input field
  } else {
    alert("Please enter a name.");
  }
});

// Helper function to generate a random color
function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  const pastel = 'hsl(' + hue + ', 70%, 80%)';
  return pastel;
}

// Scroll event to animate header text
window.addEventListener('scroll', function() {
  const header = document.getElementById('headerText');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});