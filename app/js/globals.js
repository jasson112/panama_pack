// Import Swiper and modules
import {
  Swiper, Pagination, Autoplay,
} from 'swiper';

Swiper.use([Pagination, Autoplay]);
// eslint-disable-next-line no-unused-vars
const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.getElementById('contact').addEventListener('submit', (e) => {
  console.log('verify captcha', e.target.dataset.gkey);
  e.preventDefault();
  // eslint-disable-next-line no-undef
  grecaptcha.ready(() => {
    // eslint-disable-next-line no-undef
    grecaptcha.execute(e.target.dataset.gkey, { action: 'submit' }).then(() => {
    });
  });
});
