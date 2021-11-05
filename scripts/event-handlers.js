let extractCardHeader = function(element) {
    return element.getElementsByTagName("h1")[0];
}

let cardEvents = {
    hover: function(event) {
        extractCardHeader(event.srcElement).classList.add("hovered");
    },
    exit: function(event) {
        extractCardHeader(event.srcElement).classList.remove("hovered");
    }
};

let addHoverEventForCardHeaders = function() {
    let cards = document.getElementsByClassName("card");

    for (let card of cards) {
        card.addEventListener("mouseover", cardEvents.hover, true);
        card.addEventListener("mouseout", cardEvents.exit, true);
    }
}

function changeBackgroundWhenScrolling() {
    let vh = document.documentElement.clientHeight;
    let y = window.scrollY;
    let triggerPoint = vh / 4;

    let menuBar = document.getElementById("menubar");

    if (y > triggerPoint) {
        menuBar.classList.add("scrolled");
    } else {
        menuBar.classList.remove("scrolled");
    }
}

// Main method: fetch HTML Elements only work when the page is fully loaded.
window.onload = function() {
    addHoverEventForCardHeaders();
};

window.onscroll = function() {
    changeBackgroundWhenScrolling();
}