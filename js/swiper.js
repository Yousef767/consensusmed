var swiper = new Swiper(".mySwiper", {
  freeMode: true,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirections: false,
  },
  speed: 2500,
  freeModeMomentum: false,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.5,
    },
    370: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2.7,
    },
    750: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 6,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    365: {
      slidesPerView: 1.7,
    },
    450: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 2.5,
    },
    750: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
    1250: {
      slidesPerView: 5,
    },
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1.5,
    },
    600: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 2.5,
    },
    800: {
      slidesPerView: 3.2,
    },
    1000: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 5,
    },
  },
});

var swiper4 = new Swiper(".wdsa", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});
var swiper5 = new Swiper(".wdsa2", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
