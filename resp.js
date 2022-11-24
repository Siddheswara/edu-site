  burgur= document.querySelector('.burgur');
  navbar= document.querySelector('.navbar');
  navList=document.querySelector('.nav-list');
  rightNav= document.querySelector('.right-nav');

burgur.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class');
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})