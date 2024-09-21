let navItems = document.getElementById("nav-items");

// Initially hide the menu
navItems.style.maxHeight = "0px";

function toggleMenu() {
    if (navItems.style.maxHeight === "0px" || navItems.style.maxHeight === "") {
        navItems.style.maxHeight = "300px"; // Expand to show the menu
    } else {
        navItems.style.maxHeight = "0px"; // Collapse to hide the menu
    }
}