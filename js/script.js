// Scroll Navbar
let prevScrollpos = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollpos < currentScrollPos) {
    document.querySelector("#navbar").style.boxShadow =
      "0px 2px 5px 0px rgba(0,0,0,0.3)";
  } else if (prevScrollpos == 0) {
    document.querySelector("#navbar").style.boxShadow =
      "0px 0px 0px 0px rgba(0,0,0,0.3)";
  }
});

// Hamburger Menu Toggle
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navbarNav.classList.toggle("active");
});

// Kalo di klik di luar, Hamburger Close
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburger.classList.remove("hamburger-active");
  }
});

// change bg
const porjectPage = document.getElementById("project");
const h1Page = document.querySelector(".tittle");
const textPage = document.querySelectorAll(".chng-color");

document.addEventListener("scroll", () => {
  const scrollBg = window.scrollY;

  if (scrollBg > 950) {
    setTimeout(() => {
      // porjectPage.style.backgroundColor = 'rgb(38, 118, 155)';
      porjectPage.style.backgroundColor = "rgb(26, 26, 26)";
      // h1Page.style.color = '#ECF8F9';
      h1Page.style.color = "#fff";
      h1Page.style.textShadow = "-3px -3px 0px rgba(76,172,250,0.5)";

      textPage.forEach((change) => {
        // change.style.color = '#ECF8F9';
        change.style.color = "#57b1e6";
      });
    }, 500);
  } else {
    setTimeout(() => {
      porjectPage.style.backgroundColor = "rgb(246, 246, 246)";
      h1Page.style.color = "#4682b4";
      h1Page.style.textShadow = "-3px -3px 0px rgba(76,172,250,0)";
      // h1Page.style.color = '#1c9ae4';

      textPage.forEach((change) => {
        change.style.color = "#2C3333";
      });
    }, 500);
  }

  // console.log(scrollBg)
});

// Swipper Project
let swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  fade: "true",
  grabCursor: "true",
  centerSlide: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Contact
const scriptURL =
  "https://script.google.com/macros/s/AKfycbx5fbrhM_0Whh7NDb1mz1kCBIV-DYVhRnKe3mJsKN61BovAirDL3ZS21OrzAf6wqbkcaw/exec";

const form = document.forms["portfolio-web-contact-form"];
const button = document.querySelector(".btn-send");
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close");
const progress = document.querySelector(".progress");
let timer1, timer2;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ubah teks tombol
  button.innerText = "Loading...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // mengembalikan teks tombol
      button.innerText = "Kirim";

      // tampilkan allert toast
      toast.classList.add("active");
      progress.classList.add("active");

      timer1 = setTimeout(() => {
        toast.classList.remove("active");
      }, 3000); //1s = 1000 milliseconds

      timer2 = setTimeout(() => {
        progress.classList.remove("active");
      }, 3300);

      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// Close icon toast
closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
