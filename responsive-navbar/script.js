/**
 *
 * @author thai-van
 *
 **/
// Create a function to select elements
const selectElement = (element) => document.querySelector(element);

// Menu on click icon
let menuIcon = selectElement('.menu-icon');
menuIcon.onclick = () => {
    let nav = selectElement('nav');
    nav.classList.toggle('active');
};

