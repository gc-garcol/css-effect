/**
 *
 * @author thai-van
 *
 **/

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");

window.addEventListener('scroll', function () {
    let value = window.scrollY;

    bg.style.top = toPx(value, 0.5);
    moon.style.left = toPx(-value, 0.5);
    mountain.style.top = toPx(-value, 0.15);
    road.style.top = toPx(value, 0.15);
    text.style.top = toPx(value, 0.15);

    let rect = text.getBoundingClientRect();
    console.log("scrolling " + value + " textY " + rect.top);
});

function toPx(x, y) {
    let value = x * y + 'px';
    console.log(value);
    return value;
}