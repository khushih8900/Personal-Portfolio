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


