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

let upgradePlan = document.getElementsByClassName('upgrade__plan-cta')[0];
let steps = document.getElementsByClassName('upgrade__plan__steps')[0];
let planToUpgrade = document.querySelectorAll('.upgrade__plan__one-list_item');
let stepTwo = document.getElementsByClassName('upgrade__plan__steps-two')[0]
let closeSteps = document.getElementsByClassName('upgrade__plan__steps-close')[0]

upgradePlan.addEventListener("click", openUpgradeSteps);
[...planToUpgrade].forEach((plan) => {
  plan.addEventListener('click', () => {
    openPlanUpgraded(event.target);
  })
});
closeSteps.addEventListener('click', closeUpgradeSteps);

function openUpgradeSteps(){
  steps.classList.add("open");
}

function openPlanUpgraded(element){
  [...planToUpgrade].forEach((plan) => {
    plan.classList.remove('active');
  });
  steps.classList.add("active");
  element.classList.add('active');
  stepTwo.classList.add('active');
}

function closeUpgradeSteps(){
  [...planToUpgrade].forEach((plan) => {
    plan.classList.remove('active');
  });
  stepTwo.classList.remove('active');
  steps.classList.remove("open");
}