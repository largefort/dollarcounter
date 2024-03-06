// script.js
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('dollar-counter');
  
  // Attempt to retrieve the saved dollar amount from localStorage or start at 0
  let dollars = parseInt(localStorage.getItem('dollars')) || 0;
  counter.textContent = `$${dollars}`; // Initialize the display with the saved or default value

  // Function to update the counter and add animation
  function updateCounter() {
    dollars++; // Increment the dollar amount
    counter.textContent = `$${dollars}`; // Update the display

    // Add animation
    counter.classList.add('animated');

    // Save the new dollar amount to localStorage
    localStorage.setItem('dollars', dollars);

    // Remove the animation class after the animation completes
    setTimeout(() => {
      counter.classList.remove('animated');
    }, 500); // 500ms = duration of the animation
  }

  // Automatically increase the counter every 1 second (1000 milliseconds)
  setInterval(updateCounter, 1000);
});
