# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla Javascript


### What I learned

I have been using React which makes writing javascript really easy, and so i decided to go back to vanilla js and got lost on how to toggle the hamburger and close icon. This is the code i used, although i feel there is a shorter way to write it.

And i also learned how to select multiple links with the same class and use ForEach to loop and pinpoint the exact link i clicked. Once again, my code my not be DRY. But i am working on it.


```js
btn.addEventListener('click', () => {
    mobileNav.classList.toggle('open-nav');
    document.querySelector('#closeIcon').classList.toggle('open-nav');
    document.querySelector('#navIcon').classList.toggle('closeIcon');
});
```

### Continued Development

I will keep trying to write DRY CSS and Javascript codes

## Author

- Website - [Oladunni Odetunde](https://dooneyy.netlify.app)
- Frontend Mentor - [@dooneyy](https://www.frontendmentor.io/profile/dooneyy)