const hamburger = document.querySelector('.header .nav-bar .nav-list .list');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundImage = "linear-gradient(60deg,#29323c 0%,#485563 100%)"
    }else{
        header.style.backgroundImage = "linear-gradient(transparent,transparent)"
    }
})