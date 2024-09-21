let navItems = document.getElementById("nav-items");

function toggleMenu() {
    if (navItems.style.maxHeight === "0px" || navItems.style.maxHeight === "") {
        navItems.style.maxHeight = "300px"; // expand to show the menu
    } else {
        navItems.style.maxHeight = "0px"; // collapse to hide the menu
    }
}