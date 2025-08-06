console.log("script.js connected!");

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

////////////////////////////////////
// Side Menu For Small Screen //

let hamburg = document.getElementById("hamburgerMenu");
let sideM = document.getElementById("sideMenu");

hamburg.addEventListener("click", function () {
        const currentRight = getComputedStyle(hamburg).right;

        if (currentRight === "-200px") {
                hamburg.style.right = "0px";
                sideM.style.right = "0px";
        } else {
                hamburg.style.right = "-200px";
                sideM.style.right = "-200px";
        }
});

/////////////////////////////////////////////
// scroll top button

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

///////////////////////////////////
// LoadMore

document.addEventListener("DOMContentLoaded", function () {
    const loadMoreButtons = document.querySelectorAll(".load-more");

    loadMoreButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const commentText = btn.previousElementSibling;
        commentText.textContent += " Voluptatibus culpa deserunt neque temporibus veniam rerum sunt deleniti illo ullam laboriosam in nihil facere omnis atque commodi ipsam hic illum corporis necessitatibus voluptate, ducimus sapiente dignissimos, sed ad. Impedit, nulla voluptate?";
        btn.style.display = "none";  
      });
    });
  });

  /////////////////=== Dark | Light theme ==//////////////////

  function toggleDarkMode() {
    const root = document.documentElement;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    // theme change
    root.classList.toggle('dark');

    // icon change
    if (root.classList.contains('dark')) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
    }

    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const root = document.documentElement;
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');

    if (savedTheme === 'dark') {
        root.classList.add('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
    }
});