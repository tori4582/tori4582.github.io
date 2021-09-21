
let extractCardHeader = function(element) {
    return element.getElementsByTagName("h1")[0];
}

let cardEvents = {
    hover: function(event) {
        let header = extractCardHeader(event.target);
        header.classList.add("hovered");

    },
    exit: function(event) {
        extractCardHeader(event.target).classList.remove("hovered");
    }
};

let addHoverEventforCardHeaders = function() {
    let cards = document.getElementsByClassName("card");

    for (let card of cards) {
        card.addEventListener("mouseover", cardEvents.hover, false);
        card.addEventListener("mouseout", cardEvents.exit, false);
        console.log("applied");
    }
}


// Main method: fetch HTML Elements only work when the page is fully loaded.
window.onload = function() {
   addHoverEventforCardHeaders();
};