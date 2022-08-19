function getOne(e) { return document.querySelector(e); }
function getAll(e) { return document.querySelectorAll(e); }

if (window.scrollY > 0) {
    getOne("header").style.backgroundColor = "rgba(255, 255, 255, 0.75)"
} else {
    getOne("header").style.backgroundColor = "transparent"
}

window.addEventListener("load", () => {
    timeLine();
    scroller();
    sliders();
    navLinks();
    navbarToggler();
    heroPicChanger();
    faq();
    credits();
});

function sliders() {
    var artworkSwiper = new Swiper(".artwork-swiper", {
        effect: "cards",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }).slideTo(4, false, false);

    var teamSwiper = new Swiper(".team-swiper", {
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }).slideTo(4, false, false);
}

function timeLine() {
    var tl = gsap.timeline({ defaults: { duration: 1, opacity: 0, autoAlpha: 0 } });
    tl.from('#home', { ease: "linear" })
        .from("#home ._hero-pic", { y: 50 })
        .from("#home h1", { y: -50 }, "-=1")
        .from("#home .subhead", { x: -50 }, "-=1");
}

function scroller() {
    document.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            getOne("header").style.backgroundColor = "rgba(255, 255, 255, 0.75)"
        } else {
            getOne("header").style.backgroundColor = "transparent"
        }
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#about h1", {
        scrollTrigger: {
            trigger: "#about h1",
            toggleActions: "play none none none"
        },
        x: 100,
        ease: "ease-in",
        opacity: 0
    });
    gsap.from("#about p", {
        scrollTrigger: {
            trigger: "#about p",
            toggleActions: "play none none none"
        },
        x: -100,
        ease: "ease-in",
        opacity: 0
    });
    gsap.from("#faq", {
        scrollTrigger: {
            trigger: "#faq",
            start: "top top",
            pin: true,
            pinSpacing: false,
            scrub: true
        }
    })

}

function heroPicChanger() {
    var pictures = [
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg"
    ]
    var pic = getOne(".pic");
    var plf = 0;
    window.setInterval(function () {
        pic.style.backgroundImage = `url(./images/${pictures[plf]})`;
        if (plf < pictures.length - 1) ++plf;
        else plf = 0;

    }, 2048);
}

function faq() {
    getAll("#faq .item").forEach(elm => {
        var q = elm.firstElementChild;
        var a = elm.lastElementChild
        q.addEventListener("click", function () {
            if (a.style.display == "block") {
                a.style.display = "none";
            } else {
                a.style.display = "block";
            }
        })
    });
}

function credits() {
    var year = new Date().getFullYear();
    getOne(".ft .rights").innerText = "© " + year + " Azuki Demon. All rights reserved.";
}

function navbarToggler() {
    getOne(".mobile-navbar-toggler").addEventListener("click", () => {
        var toggler = getOne(".mobile-navbar-toggler");
        var navbar = getOne(".mobile-navbar");
        if (toggler.classList.contains("toggler-open")) {

            toggler.classList.remove("toggler-open");
            toggler.classList.add("toggler-close");
            navbar.classList.remove("elm-closed");
            navbar.classList.add("elm-open");

        } else {
            toggler.classList.add("toggler-open");
            toggler.classList.remove("toggler-close");
            navbar.classList.remove("elm-open");
            navbar.classList.add("elm-closed");
        }
    })
}

function navLinks() {
    getAll(".nav-link").forEach(elm => {
        elm.addEventListener("click", function () {
            var toggler = getOne(".mobile-navbar-toggler");
            var navbar = getOne(".mobile-navbar");
            toggler.classList.add("toggler-open");
            toggler.classList.remove("toggler-close");
            navbar.classList.remove("elm-open");
            navbar.classList.add("elm-closed");
        });
    });
}