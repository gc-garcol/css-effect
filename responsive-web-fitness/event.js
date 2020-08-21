/**
 *
 * @author thai-van
 *
 **/

let onToggleMenu = () => {
    let menuToggler = document.querySelector('.toggle');
    let banner  = document.querySelector('.banner');

    menuToggler.classList.toggle('active');
    banner.classList.toggle('active');
};