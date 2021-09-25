
let extractCardHeader = function(element) {
    return element.getElementsByTagName("h1")[0];
}

let cardEvents = {
    hover: function(event) {
        extractCardHeader(event.target).classList.add("hovered");

    },
    exit: function(event) {
        extractCardHeader(event.target).classList.remove("hovered");
    }
};

let addHoverEventforCardHeaders = function() {
    let cards = document.getElementsByClassName("card");

    for (let card of cards) {
        card.addEventListener("mouseover", cardEvents.hover, true);
        card.addEventListener("mouseout", cardEvents.exit, true);
    }
}


// Main method: fetch HTML Elements only work when the page is fully loaded.
window.onload = function() {
   addHoverEventforCardHeaders();
};