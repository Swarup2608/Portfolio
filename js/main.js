var typed = new Typed(".typing",{
    strings: ["React Developer","AI developer","Data Analyst","Full Stack Developer","ML Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

const navtoggler = document.querySelector(".nav-toggler span i"),
nav = document.querySelector(".side");
navtoggler.addEventListener("click",()=>{
    nav.classList.toggle("open");
    if(styler.classList.contains("open")){
        styler.classList.remove("open");
    }
})