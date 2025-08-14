const list = document.querySelectorAll('.list ');

function activeLink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));
/menu-icon/ 

const menuIcon = document.getElementById('menuIcon');
const sideBar = document.getElementById('sideBar');

menuIcon.addEventListener('click', function () {
  sideBar.classList.toggle('active');
});
/ home nav bar/ 
