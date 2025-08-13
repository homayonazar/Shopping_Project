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
    const currentRight = getComputedStyle(sideM).right;

    if (currentRight === "-340px") {
        sideM.style.right = "0px";
        hamburg.style.right = "320px"
    } else {
        sideM.style.right = "-340px";
        hamburg.style.right = "20px"

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

    root.classList.toggle('dark');

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
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline';
    } else {
        moonIcon.style.display = 'inline';
        sunIcon.style.display = 'none';
    }
});




// Popup login menu 


let login_btn = document.getElementById("login_btn");
let popup_menu = document.getElementById("popup_login");
let close_btn = document.getElementById("close");
let login_btn2 = document.getElementById("login_btn2");
let login_btn3 = document.getElementById("login_btn3");


login_btn.addEventListener("click", function(){
    if (popup_menu.style.visibility === "visible") {
        popup_menu.style.visibility = "hidden";
    } else {
        popup_menu.style.visibility = "visible";
    }
});

login_btn2.addEventListener("click",function(){
    if (popup_menu.style.visibility === "visible") {
        popup_menu.style.visibility = "hidden";
    } else {
        popup_menu.style.visibility = "visible";
    }
})
login_btn3.addEventListener("click",function(){
    if (popup_menu.style.visibility === "visible") {
        popup_menu.style.visibility = "hidden";
    } else {
        popup_menu.style.visibility = "visible";
    }
})


close_btn.addEventListener("click", function(){
    popup_menu.style.visibility = "hidden";
});


// Cart Click :

let cart_btn = document.getElementById("cart_btn");
let cart_side = document.getElementById("cart_side");
let close_cart = document.getElementById("close_cart");
let cart_side2 = document.getElementById("cart_side2");

cart_btn.addEventListener("click", function() {
  if (cart_side.style.right === "0px") {
    cart_side.style.right = "-280px";
  } else {
    cart_side.style.right = "0px";
  }
});

cart_side2.addEventListener("click",function(){
    if (cart_side.style.right === "0px") {
    cart_side.style.right = "-280px";
  } else {
    cart_side.style.right = "0px";
  }
})

close_cart.addEventListener("click",function(){
    cart_side.style.right = "-280px";
})

// Notification - close 

let notification = document.getElementById("notification");
let close_notif = document.getElementById("close_notif");
let notif_btn = document.getElementById("notif_btn");
let notif_btn2 = document.getElementById("notif_btn2");
// notif_btn.addEventListener("click", function() {
//   if (notification.style.right === "0px") {
//     notification.style.right = "-300px";
//   } else {
//     notification.style.right = "0px";
//   }
// });

// close_notif.addEventListener("click", function(){
//     notification.style.right = "-300px";
// })

// use class change method 
notif_btn.addEventListener("click", function () {
    notification.classList.toggle("show");
});

notif_btn2.addEventListener("click",function(){
        notification.classList.toggle("show");

})

close_notif.addEventListener("click", function () {
    notification.classList.remove("show");
});



