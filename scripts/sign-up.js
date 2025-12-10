// Define variables
const form = document.getElementById('sign-up-form');
const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

// Add event listener to the form
form.addEventListener('submit', function (event) {
  // Prevent form submission
  event.preventDefault();

  // Validate email
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex pattern

  // Check if email is valid
  if (!emailPattern.test(emailValue)) {
    // Show error message
    errorMessage.classList.remove('hide');
    emailInput.classList.add('input-error');
    emailInput.setAttribute('aria-invalid', 'true');
    // Focus the email input for accessibility
    emailInput.focus();
  } else {
    // Hide error message and proceed with form submission
    errorMessage.classList.add('hide');
    emailInput.classList.remove('input-error');
    emailInput.setAttribute('aria-invalid', 'false');
    // Store the email in localStorage to use on success page
    localStorage.setItem('userEmail', emailValue);

    // Redirect to success page
    window.location.href = 'success.html';
  }
});
