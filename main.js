


const navLink = document.querySelectorAll('header nav a'); // main nav
const logoLink = document.querySelectorAll('.logo a'); 
const section = document.querySelectorAll('section');

// sidebar nav
const sideLinks = document.querySelectorAll('.side-navigation ul li a');

const activePage = () => {
  const header = document.querySelector('header'); 
  const barBox = document.querySelectorAll('.bar-box');

  header.classList.remove('active');
  setTimeout(() => {
    header.classList.add('active');
  }, 1100);

  navLink.forEach(link => link.classList.remove('active-page'));
  sideLinks.forEach(link => link.parentElement.classList.remove('active-menu'));

  barBox.forEach(box => {
    box.classList.remove('active');
    setTimeout(() => {
      box.classList.add('active');
    }, 1100);
  });

  section.forEach(sec => sec.classList.remove('active-page'));
};

// main nav click
navLink.forEach((link, index) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active-page')) {
      activePage();
      link.classList.add('active-page');

      // sidebar sync
      sideLinks[index].parentElement.classList.add('active-menu');

      setTimeout(() => {
        section[index].classList.add('active-page'); 
      }, 1100);
    }
  });
});

// sidebar click
sideLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    if (!link.parentElement.classList.contains('active-menu')) {
      activePage();
      link.parentElement.classList.add('active-menu');

      // main nav sync
      navLink[index].classList.add('active-page');

      setTimeout(() => {
        section[index].classList.add('active-page'); 
      }, 1100);
    }
  });
});

// logo click
logoLink.forEach(logo => {
  logo.addEventListener('click', () => {
    if (!navLink[0].classList.contains('active-page')) {
      activePage();
      navLink[0].classList.add('active-page');
      sideLinks[0].parentElement.classList.add('active-menu');
      setTimeout(() => {
        section[0].classList.add('active-page');
      }, 1100);
    }
  });
});



/ navigation / 


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
const details = document.querySelectorAll('.details'); 

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

const portfolioBoxes = document.querySelectorAll('.portfolio-box'); 
const totalSlides = document.querySelectorAll('.portfolio-item .portfolio-img').length;

let index = 0;

const activePortfolio = () => {
  
  
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

  // active class update
  portfolioBoxes.forEach(box => {
    box.classList.remove('num-active');
  });
  portfolioBoxes[index].classList.add('num-active');

  // arrow enable/disable
  if (index === 0) {
    arrowLeft.classList.add('disable');
  } else {
    arrowLeft.classList.remove('disable');
  }

  if (index === totalSlides - 1) {
    arrowRight.classList.add('disable');
  } else {
    arrowRight.classList.remove('disable');
  }
};

arrowRight.addEventListener('click', () => {
  if (index < totalSlides - 1) {
    index++;
    activePortfolio();
  }
});

arrowLeft.addEventListener('click', () => {
  if (index > 0) {
    index--;
    activePortfolio();
  }
});


activePortfolio();
