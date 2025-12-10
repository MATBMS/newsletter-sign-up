# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Screenshot

![Screenshot preview](./images/desktop-design.jpg)

## Links

- [Repository URL](https://github.com/MATBMS/newsletter-signup)
- [Live site URL](https://matbms-newsletter-signup.netlify.app/)

## Built with

- HTML, CSS, JavaScript

## What I learned

I learned how to use `localStorage` to store and retrieve data in the browser. In the sign-up form, I save the user's email with `localStorage.setItem('userEmail', emailValue)` after validation. Then on the success page, I retrieve it using `localStorage.getItem('userEmail')` to display a personalized message.
