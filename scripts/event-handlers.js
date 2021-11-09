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

function getSectionPositions() {
    let sections = document.getElementsByTagName("section");
    let sectionPositions = [];
    for (let s of sections) {
        sectionPositions.push(s.offsetTop);
    }
    return sectionPositions;
}

function getCurrentIndex() {
    let currentIndex = -1;
    let y = window.scrollY;
    let triggerPoint = document.documentElement.clientHeight / 2;
    let menuBarHeight = document.getElementById('menubar').offsetHeight;
    let sectionPositions = getSectionPositions();

    for (let i = 0; i < sectionPositions.length; i++) {
        if (y + triggerPoint >= sectionPositions[i]) {
            currentIndex = i;
            // console.log(y + " " + sectionPositions[i]);
        }
    }

    return currentIndex;
}

function changeActiveLinkWhenScrolling() {
    let y = window.scrollY;
    let currentIndex = getCurrentIndex();

    let menuItems = document.getElementsByClassName("indexes__item");
    for (let p of menuItems) {
        p.classList.remove("active");
    }

    if (currentIndex !== -1) {
        menuItems[currentIndex].classList.add("active");
    }

}

// Main method: fetch HTML Elements only work when the page is fully loaded.
window.onload = function() {

};

window.onscroll = function() {
    changeBackgroundWhenScrolling();
    changeActiveLinkWhenScrolling();
}