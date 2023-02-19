let navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', function(){
    let scroll = this.window.pageYOffset;
    if (scroll > lastScroll){
        navbar.style.opacity='0'
    } else {
        navbar.style.opacity='1'
    }
    lastScroll = scroll;
})