const list = document.querySelectorAll('.list ');

function activeMenuLink() {
  list.forEach((item) => item.classList.remove('active-menu'));
  this.classList.add('active-menu');
}

list.forEach((item) => item.addEventListener('click', activeMenuLink));
/menu-icon/

const menuIcon = document.getElementById('menuIcon');
const sideBar = document.getElementById('sideBar');

menuIcon.addEventListener('click', function () {
  sideBar.classList.toggle('active');
});
/ resume button/
const resumeBtn = document.querySelectorAll('.resume-btn');
const details = document.querySelectorAll('.details'); // <-- সব details ধরো

resumeBtn.forEach((btn, index) => {
  btn.addEventListener('click', function () {

    resumeBtn.forEach((b) => b.classList.remove('actives-resume'));

    details.forEach((d) => d.classList.remove('active-details'));


    this.classList.add('actives-resume');

    details[index].classList.add('active-details');
  });
});
/ slider section/ 
const arrowRight = document.querySelector('.nav-btn .right');
const arrowLeft = document.querySelector('.nav-btn .leftBtn');
const imgSlide = document.querySelector('.portfolio-item');
const totalSlides = document.querySelectorAll('.portfolio-item .portfolio-img').length;

let index = 0;

const activePortfolio = () => {
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
};

arrowRight.addEventListener('click', () => {
  if (index < totalSlides - 1) {
    index++;
    arrowRight.classList.add('disable')
  }
  activePortfolio();
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    arrowLeft.classList.add('disable');
  }
  activePortfolio();
});


