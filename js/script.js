function toggleMenu() {
    const navItems = document.getElementById('nav-items');
    if (navItems.style.maxHeight) {
        navItems.style.maxHeight = null; // Close the menu
    } else {
        navItems.style.maxHeight = navItems.scrollHeight + "px"; // Open the menu
    }
}
