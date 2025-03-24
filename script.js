document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".menu-icon");

    // Toggle Navigation Bar
    function toggleNav() {
        navbar.classList.toggle("active");
    }

    menuIcon.addEventListener("click", toggleNav);

    // Close navbar when clicking outside
    window.addEventListener("click", function (event) {
        if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });

    // Move slider when clicking on dots
    const container = document.querySelector(".carousel-container");
    const dots = document.querySelectorAll(".dot");
    let index = 0;

    function moveSlide(newIndex) {
        index = newIndex;
        const offset = index * -900;
        container.style.transform = `translateX(${offset}px)`;

        // Update active dot
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Initialize first dot as active
    dots[index].classList.add("active");

    // Make moveSlide function globally accessible
    window.moveSlide = moveSlide;
});
