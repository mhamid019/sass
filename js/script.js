let myNav = document.querySelector(".header .navbar");
document.querySelector("#menu-btn").onclick = () => {
    myNav.classList.add("active");
};

document.querySelector("#close-navbar").onclick = () => {
    myNav.classList.remove("active");
};

let registerBtn = document.querySelector(".account-form .register-btn");
let loginBtn = document.querySelector(".account-form .login-btn");

registerBtn.addEventListener("click", function() {
    this.classList.add("active");
    loginBtn.classList.remove("active");
    document.querySelector(".account-form .login-form").classList.remove("active");
    document.querySelector(".account-form .register-form").classList.add("active");
});

loginBtn.addEventListener("click", function() {
    registerBtn.classList.remove("active");
    this.classList.add("active");
    document.querySelector(".account-form .login-form").classList.add("active");
    document.querySelector(".account-form .register-form").classList.remove("active");
});

// open account form
let accountForm = document.querySelector(".account-form");
document.querySelector(".header #account-btn").addEventListener("click", function() {
    accountForm.classList.add("active");
});

// close account form
document.querySelector(".account-form #close-form").addEventListener("click", function(e) {
    accountForm.classList.remove("active");
});


// home slide code
let swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination", 
        clickable: true,
    },
    loop: true,
    grabCursor: true,
});


// home-courses
// home slide code
let swiperTwo = new Swiper(".home-courses-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        991: {
            slidesPerView: 3,
        },
    },
});

// teachers-slider
let teachersSwiper = new Swiper(".teachers-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        991: {
            slidesPerView: 3,
        },
    },
});


// reviews
let studentSwiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },

        991: {
            slidesPerView: 3,
        },
    },
});


// show all courses in courses section
if(document.querySelector(".courses .load-more .btn")){
        document.querySelector(".courses .load-more .btn").addEventListener("click", () => {

        document.querySelectorAll(".courses .box-container .hide").forEach(show => {
            show.style.display = "block";
        });
    
        document.querySelector(".courses .load-more").style.display = "none";
        
        document.querySelector(".courses .see-less").style.display = "block";
    });
}

// when clicked on see-less btn hide, (.hide) content in courses section

if(document.querySelector(".courses .see-less .btn")){
        document.querySelector(".courses .see-less .btn").addEventListener("click", () => {

        document.querySelectorAll(".courses .box-container .hide").forEach(show => {
            show.style.display = "none";
        });
    
        document.querySelector(".courses .load-more").style.display = "block";
        document.querySelector(".courses .see-less").style.display = "none";
    
    });
    
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// contact section

// accordion-heading

let accordion = document.querySelectorAll(".faq .accordion-container .accordion");
accordion.forEach( accor => {
    accor.addEventListener("click", ()=> {
        accordion.forEach(dion => {
            dion.classList.remove("active");
        });
        accor.classList.toggle("active");
    });
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// university section
let universitytSwiper = new Swiper(".logo-container", {
    loop: true,
    grabCursor: true,
    // spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        450: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        991: {
            slidesPerView: 4,
        },

        1200: {
            slidesPerView: 5,
        },
    },
});

