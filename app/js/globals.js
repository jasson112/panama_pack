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
  //touchRatio: "0",
  shortSwipes: false,
  preventClicks: false,
  preventClicksPropagation: false,
  pagination: {
    el: ".swiper-pagination",
  },
});

const discover = document.getElementsByClassName("discover");
const questions = document.getElementsByClassName("showtime__question");
[...questions].forEach((question) => {
  question.addEventListener("click", (e) => {
    if (e.target.id == "close") {
      e.target.parentNode.parentNode.children[1].style.display = "none";
    } else {
      e.currentTarget.children[1].style.display = "block";
    }
  });
});
[...discover].forEach((item) => {
  item.parentNode.parentNode.parentNode.children[2].children[2].addEventListener(
    "click",
    (e) => {
      const target = e.currentTarget;
      target.parentNode.style.opacity = 0;
      setTimeout(() => {
        target.parentNode.style.display = "none";
      }, 500);
    }
  );
  item.addEventListener("click", (e) => {
    const target = e.currentTarget;
    target.parentNode.parentNode.parentNode.children[2].style.display = "flex";
    setTimeout(() => {
      console.log(target);
      target.parentNode.parentNode.parentNode.children[2].style.opacity = 1;
    }, 500);
  });
});
