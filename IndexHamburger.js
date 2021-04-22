const hamburger = document.querySelector('.header .nav-bar .nav-list .list');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a'); // querySelectorAll because there is more than 1 item (2 lists)
const header = document.querySelector('.header.container');

// toggle the hamburger click
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

// header effect, when the scroll position is above 250, the background is strong, else is it transparent.
document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundImage = "linear-gradient(60deg,#29323c 0%,#485563 100%)"
    }else{
        header.style.backgroundImage = "linear-gradient(transparent,transparent)"
    }
})

// toggle every item in the list to close it if it is clicked after hamburger list is opened.
menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});