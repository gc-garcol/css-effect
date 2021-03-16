const jsItem = document.getElementById("js-items");
const $jsItems = $('#js-items');

let initImages = () => {
    let data = [];
    for (let i = 1; i < 16; i++) {
        data.push(imgGroup(`./img/${i < 10 ? "0" + i : i}.jpg`));
    }
    jsItem.innerHTML = data.join("\n");
    
    $jsItems.carousel();
}

let imgGroup = (src) => {
    return `
<div class="carousel-item">
    <img src="${src}">
</div>
    `;
}

window.onload = initImages;