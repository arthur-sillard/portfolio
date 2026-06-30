const toggle = document.getElementById('theme-toggle')



toggle?.addEventListener('click', () => {

    const isDark = document.documentElement.classList.toggle('dark')

    localStorage.setItem('theme', isDark ? 'dark' : 'light')

})


let lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0px";
    }
    lastScrollTop = scrollTop;
})