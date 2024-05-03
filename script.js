
const hamburger=document.querySelector('.hamburger-icon');
const menuLines= document.querySelector('.menu-lines');

hamburger.addEventListener('click',()=>{
    menuLines.classList.toggle('active');
    hamburger.classList.toggle('active');
})
window.addEventListener('click' ,()=>{

})