let calculateY = () => {
    let obj = document.querySelector("div#contact-container");
    let title = obj.querySelector("h1");

    let width = obj.getBoundingClientRect().width;
    let image_y = 3 * width / 4.0;
    let title_height = title.getBoundingClientRect().height;
    let title_y = title_height / 3;

    let delta = (3 * title_y - image_y) / 2;

    return delta + (window.innerHeight * 0.05);
}

let transpose = (y) => {

    let style = "background-position-y: " + y + "px !important;";

    let obj = document.querySelector("div#contact-container");
    obj.setAttribute("style", style);
}

let transposeAction = () => {
    if (window.innerWidth < 800) {
        transpose(calculateY());
    }
}

window.onload = () => {
    transposeAction();
}

window.onresize = () => {
    transposeAction();
}