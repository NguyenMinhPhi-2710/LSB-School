// let item= document.querySelectorAll(".experience-item");
// let content=document.querySelectorAll(".experience-item__title");
// [...]item.addEventListener("mouseover",function(){
//     content.style.color="#fff";
//     item.style.background= "#d7e14";
    
// })

window.addEventListener("scroll",function(){
    var headerContact= document.querySelector(".header-contact__list");
    header.classList.toggle("hidden",window.scrollY>0);

})