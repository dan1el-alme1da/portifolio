/*============================= toggle nav bar =============================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
/*============================== scroll sections active link =============================*/
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });
/*============================== sticky navbar =============================*/
let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);

/* ============== remove toggle icon and navbar when click navbar link (scroll)==========*/
menuIcon.classList.remove("bx-x");
navbar.classList.remove("active");
};

/* ============== scroll reavel ======================*/
ScrollReveal({ 
    
    distance: 80,
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portifolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .sobre-content', { origin: 'right' });

/* ============== type js ======================*/

new TypeIt(".multiple-text", {
    speed: 25,
    startDelay: 900,
  })
    .type("isenvo", { delay: 100 })
    .move(-7, { delay: 100 })
    .type("D", { delay: 400 })
    .move(null, { to: "START", instant: true, delay: 300 })
    .move(1, { delay: 200 })
    .delete(1)
    .type("e", { delay: 225 })
    .pause(200)
    
    .move(5, { delay: 200 })
    .type("l", { delay: 350 })
    .move(null, { to: "END" })
    .type("vedor fronend, ")
    .move(-5, { delay: 150 })
    .type("t")
    .move(null, { to: "END" })
    .type(' desenvolvedor <span class="place">internet</span>', { delay: 400 })
    .delete(".place", { delay: 800, instant: true })
    .type('<em><strong class="font-semibold">backend.</strong></em>', {
      speed: 100,
    })
    .go();