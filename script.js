
const hamburger=document.querySelector('.hamburger-icon');
const menuLines= document.querySelector('.menu-lines');
const scrollElement = document.querySelector('.nav-header,.logo,.header-list');

hamburger.addEventListener('click',()=>{
    menuLines.classList.toggle('active');
    hamburger.classList.toggle('active');
})
document.addEventListener("scroll", () => {
    const scroll_position = window.scroll;
    if (scroll_position > 250) {
      scrollElement.style.backgroundColor = "#00ff4";
    } else {
     scrollElement.backgroundColor = "transparent";
    }
  });

