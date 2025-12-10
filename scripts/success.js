// Get the email from localStorage and display it
const emailSpan = document.querySelector('.email');
const userEmail = localStorage.getItem('userEmail');

if (userEmail) {
  emailSpan.textContent = userEmail;
}
