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

    // First Carousel (Carousel 1)
    let currentSlide1 = 0;
    const slides1 = document.querySelectorAll('.carousel-1 .carousel-slide');
    const dots1 = document.querySelectorAll('.carousel-1 .dot');
    const container1 = document.querySelector('.carousel-1 .carousel-container');

    // Function to show a specific slide in Carousel 1
    function showSlide1(index) {
        if (index >= slides1.length) currentSlide1 = 0;
        if (index < 0) currentSlide1 = slides1.length - 1;

        container1.style.transform = `translateX(-${currentSlide1 * 100}%)`;

        dots1.forEach(dot => dot.classList.remove('active'));
        dots1[currentSlide1].classList.add('active');
    }

    // Function to move to the next slide automatically for Carousel 1
    function autoSlide1() {
        currentSlide1++;
        showSlide1(currentSlide1);
    }

    // Function to move to a specific slide when clicked in Carousel 1
    window.moveSlide1 = function (index) {
        currentSlide1 = index;
        showSlide1(currentSlide1);
    };

    // Automatically change slide every 5 seconds for Carousel 1
    setInterval(autoSlide1, 5000); // Carousel 1

    // Initialize the first slide and first dot for Carousel 1
    showSlide1(currentSlide1);

    // Second Carousel (Carousel 2)
    let currentSlide2 = 0;
    const slides2 = document.querySelectorAll('.carousel-2 .carousel-slide');
    const dots2 = document.querySelectorAll('.carousel-2 .dot');
    const container2 = document.querySelector('.carousel-2 .carousel-container');

    // Function to show a specific slide in Carousel 2
    function showSlide2(index) {
        if (index >= slides2.length) currentSlide2 = 0;
        if (index < 0) currentSlide2 = slides2.length - 1;

        container2.style.transform = `translateX(-${currentSlide2 * 100}%)`;

        dots2.forEach(dot => dot.classList.remove('active'));
        dots2[currentSlide2].classList.add('active');
    }

    // Function to move to the next slide automatically for Carousel 2
    function autoSlide2() {
        currentSlide2++;
        showSlide2(currentSlide2);
    }

    // Function to move to a specific slide when clicked in Carousel 2
    window.moveSlide2 = function (index) {
        currentSlide2 = index;
        showSlide2(currentSlide2);
    };

    // Automatically change slide every 5 seconds for Carousel 2
    setInterval(autoSlide2, 5000); // Carousel 2

    // Initialize the first slide and first dot for Carousel 2
    showSlide2(currentSlide2);
});
