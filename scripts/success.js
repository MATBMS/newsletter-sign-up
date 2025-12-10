// Get the email from localStorage and display it
const emailSpan = document.querySelector('.email');
const userEmail = localStorage.getItem('userEmail');

if (userEmail) {
  emailSpan.textContent = userEmail;
}

// Fallback if no email exists:
if (userEmail) {
  // Display the email
  emailSpan.textContent = userEmail;
  // Clear localStorage after displaying the email
  localStorage.removeItem('userEmail');
} else {
  // Redirect back if accessed directly without email
  window.location.href = './index.html';
}
