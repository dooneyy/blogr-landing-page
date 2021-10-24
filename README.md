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

![Screenshot (46)](https://user-images.githubusercontent.com/65260475/138614726-678fca65-51bf-4926-9b28-9f6404a12b60.png)
![Screenshot (47)](https://user-images.githubusercontent.com/65260475/138614728-5ee14372-cb17-487b-87c6-1eeae985d908.png)
![Screenshot (48)](https://user-images.githubusercontent.com/65260475/138614730-80ec6227-aa38-4ab7-80f1-a28d351394db.png)


### Links

- Solution URL: [https://blogr-landing-page-gilt.vercel.app/]


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
