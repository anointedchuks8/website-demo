const navLinks= document.querySelector(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () =>{
// Toggle mlobile menu visibility
document.body.classList.toggel("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () =>  menuOpenButton.click());
}) 


//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    
    loop: true,
    grabCursor: true,
    spaceBetween

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: 'swiper-button-prev',
    },

// Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2 
        }
        1024:{
            slidesPerView: 3 
        }
    }
}

   
);