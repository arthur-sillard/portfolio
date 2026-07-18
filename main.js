const toggle = document.getElementById('theme-toggle')

toggle?.addEventListener('click', () => {

    const isDark = document.documentElement.classList.toggle('dark')

    localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

const toggleMobile = document.getElementById('theme-toggle-mobile')

toggleMobile?.addEventListener('click', () => {

    const isDark = document.documentElement.classList.toggle('dark')

    localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}


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


const dropdown = document.getElementById("dropdownMenu");
const button = document.getElementById("dropdownToggle");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !button.contains(e.target)) {
        dropdown.classList.add("hidden");
    }
});