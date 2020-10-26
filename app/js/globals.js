/* import Carousel from './components/carouselComponent';
import Quantity from './components/quantityComponent';

window.Carousel = Carousel;
window.Quantity = Quantity; */
/* const socket = new SocketComponent(() => {
  console.log("all raigtho");
}); */
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// init Swiper:
new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
});
