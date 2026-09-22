// ================= MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("open");

});


/* Close menu after clicking link */

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("open");

    });

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================= SCROLL ANIMATION =================

const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.12

    }

);


document.querySelectorAll(".reveal").forEach(function (element) {

    observer.observe(element);

});


// ================= LINKEDIN =================

// Replace this URL with your actual LinkedIn profile URL.

const linkedinURL = "https://www.linkedin.com/";

document.getElementById("linkedin").href = linkedinURL;

document.getElementById("linkedin").target = "_blank";

document.getElementById("linkedin").rel = "noopener noreferrer";