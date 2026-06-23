/* =========================================================
   Armin Taranum Portfolio
   script.js
   Part 1
=========================================================*/

"use strict";

/* ===========================
   Loading Screen
=========================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});


/* ===========================
   Typing Animation
=========================== */

const typingElement = document.getElementById("typing");

const typingWords = [

    "Frontend Developer",
    "Second Year CSE Student",
    "Bootstrap Developer",
    "JavaScript Enthusiast",
    "UI Designer"

];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = typingWords[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();


/* ===========================
   Theme Toggle
=========================== */

const themeButton = document.getElementById("themeBtn");

const savedTheme =
    localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeButton) {

        themeButton.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    }

}

if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {

            localStorage.setItem(
                "portfolioTheme",
                "light"
            );

            themeButton.innerHTML =
                '<i class="bi bi-sun-fill"></i>';

        } else {

            localStorage.setItem(
                "portfolioTheme",
                "dark"
            );

            themeButton.innerHTML =
                '<i class="bi bi-moon-stars-fill"></i>';

        }

    });

}


/* ===========================
   Smooth Scroll
=========================== */

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================
   Console Message
=========================== */

console.log(

    "Portfolio Loaded Successfully"

);
/* =========================================================
   script.js
   Part 2
   Scroll Progress | Reveal Animation | Navbar
=========================================================*/

/* ===========================
   Scroll Progress Bar
=========================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* ===========================
   Reveal Animation
=========================== */

const revealElements =
    document.querySelectorAll(".reveal");

function revealSections() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const top =
            element.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealSections
);

window.addEventListener(
    "load",
    revealSections
);


/* ===========================
   Active Navigation
=========================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (

            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight

        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") ===
            "#" + currentSection

        ) {

            link.classList.add("active");

        }

    });

});


/* ===========================
   Navbar Background
=========================== */

const navbar =
    document.querySelector(".glass-nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background =
            "rgba(8,12,25,.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.25)";

    } else {

        navbar.style.background =
            "rgba(10,15,30,.75)";

        navbar.style.boxShadow = "none";

    }

});


/* ===========================
   Floating Profile Effect
=========================== */

const profile =
    document.querySelector(".profile-img");

if (profile) {

    profile.addEventListener(
        "mousemove",
        () => {

            profile.style.transform =
                "scale(1.04) rotate(2deg)";

        }
    );

    profile.addEventListener(
        "mouseleave",
        () => {

            profile.style.transform =
                "scale(1) rotate(0deg)";

        }
    );

}


/* ===========================
   Button Hover Animation
=========================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px)";

    });

});


/* ===========================
   Fade-in Cards
=========================== */

const cards =
    document.querySelectorAll(".glass-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition = ".3s";

        card.style.boxShadow =
            "0 20px 45px rgba(13,110,253,.25)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "";

    });

});


console.log(
    "Part 2 Loaded Successfully"
);
/* =========================================================
   script.js
   Part 3
   Contact Form | Scroll Top | Counter Animation
=========================================================*/

/* ===========================
   Contact Form Validation
=========================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            formMessage.style.color = "#ff4d4d";

            formMessage.innerHTML =
                "Please fill in all the fields.";

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.style.color = "#ff4d4d";

            formMessage.innerHTML =
                "Please enter a valid email address.";

            return;

        }

        formMessage.style.color = "#20c997";

        formMessage.innerHTML =
            "✅ Thank you! Your message has been sent successfully.";

        contactForm.reset();

        setTimeout(() => {

            formMessage.innerHTML = "";

        }, 4000);

    });

}

/* ===========================
   Scroll To Top Button
=========================== */

const scrollBtn =
    document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    }

    else {

        scrollBtn.style.display = "none";

    }

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ===========================
   Animated Counter
=========================== */

const counters =
    document.querySelectorAll(".counter");

const counterSpeed = 100;

function startCounters() {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        const updateCounter = () => {

            const current =
                +counter.innerText;

            const increment =
                Math.ceil(target / counterSpeed);

            if (current < target) {

                counter.innerText =
                    current + increment;

                setTimeout(updateCounter, 20);

            }

            else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

}

const achievementSection =
    document.getElementById("achievements");

let counterStarted = false;

window.addEventListener("scroll", () => {

    if (
        achievementSection &&
        !counterStarted &&
        window.scrollY >
        achievementSection.offsetTop - 500
    ) {

        counterStarted = true;

        startCounters();

    }

});

/* ===========================
   Project Card Hover Effect
=========================== */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

/* ===========================
   Image Hover Zoom
=========================== */

const projectImages =
    document.querySelectorAll(".project-card img");

projectImages.forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/* ===========================
   Footer Year
=========================== */

const year =
    new Date().getFullYear();

const footer =
    document.querySelector("footer p:last-child");

if (footer) {

    footer.innerHTML =
        `© ${year} Armin Taranum. All Rights Reserved.`;

}

console.log("Part 3 Loaded Successfully");
/* =========================================================
   script.js
   Part 4 (Final)
   Mobile Navbar | Lazy Loading | Initialization
=========================================================*/

/* ===========================
   Mobile Navbar Close
=========================== */

const navItems = document.querySelectorAll(".nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});


/* ===========================
   Lazy Loading Images
=========================== */

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.loading = "lazy";

});


/* ===========================
   Section Fade Animation
=========================== */

const allSections =
    document.querySelectorAll("section");

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {

        threshold: 0.2

    }

);

allSections.forEach(section => {

    observer.observe(section);

});


/* ===========================
   Navbar Shadow
=========================== */

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".glass-nav");

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 8px 25px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});


/* ===========================
   Button Ripple Effect
=========================== */

const allButtons =
    document.querySelectorAll(".btn");

allButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle =
            document.createElement("span");

        const diameter =
            Math.max(

                button.clientWidth,

                button.clientHeight

            );

        circle.style.width =
            circle.style.height =
            diameter + "px";

        circle.style.position = "absolute";

        circle.style.borderRadius = "50%";

        circle.style.background =
            "rgba(255,255,255,.4)";

        circle.style.transform =
            "scale(0)";

        circle.style.left =
            e.offsetX - diameter / 2 + "px";

        circle.style.top =
            e.offsetY - diameter / 2 + "px";

        circle.style.animation =
            "ripple .6s linear";

        button.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


/* ===========================
   Welcome Message
=========================== */

window.addEventListener("load", () => {

    console.log(
        "Welcome to Armin Taranum's Portfolio!"
    );

});


/* ===========================
   Initialize Everything
=========================== */

function initializePortfolio() {

    revealSections();

    if (progressBar) {

        progressBar.style.width = "0%";

    }

}

initializePortfolio();


/* ===========================
   End of File
=========================== */

console.log(
    "Portfolio Fully Loaded Successfully!"
);