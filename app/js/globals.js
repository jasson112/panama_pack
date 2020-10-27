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
    clickable: true,
  },
});

let upgradePlan = document.getElementsByClassName('upgrade__plan-cta')[0];
let steps = document.getElementsByClassName('upgrade__plan__steps')[0];
let planToUpgrade = document.querySelectorAll('.upgrade__plan__one-list_item');
let stepTwo = document.getElementsByClassName('upgrade__plan__steps-two')[0]
let closeSteps = document.getElementsByClassName('upgrade__plan__steps-close')[0];
let stepPlane = document.getElementsByClassName('upgrade__plan__two-plan');

upgradePlan.addEventListener("click", openUpgradeSteps);
[...planToUpgrade].forEach((plan) => {
  plan.addEventListener('click', () => {
    openPlanUpgraded(event.target);
  })
});
closeSteps.addEventListener('click', closeUpgradeSteps);

function openUpgradeSteps() {
  steps.classList.add("open");
}

function openPlanUpgraded(element) {
  [...planToUpgrade].forEach((plan) => {
    plan.classList.remove('active');
  });
  steps.classList.add("active");
  element.classList.add('active');

  [...stepPlane].forEach((el) => {
    el.classList.remove('active');
  });

  let planSelected = Number(element.dataset.index) - 1;
  stepPlane[planSelected].classList.add('active');
  stepTwo.classList.add('active');
}

function closeUpgradeSteps() {
  [...planToUpgrade].forEach((plan) => {
    plan.classList.remove('active');
  });
  stepTwo.classList.remove('active');
  steps.classList.remove("open");
}


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
