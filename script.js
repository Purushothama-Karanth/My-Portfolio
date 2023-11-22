document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    body.classList.add("loaded"); // Add the "loaded" class to trigger the fade-in effect

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("toggleDarkMode");

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });

    // Dropdown menu for mobile
    const dropdownBtn = document.getElementById("dropdownbtn");
    const dropdownContent = document.getElementById("dropdown-content");

    dropdownBtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("active");
    });
});
