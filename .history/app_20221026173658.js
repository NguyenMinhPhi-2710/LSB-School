// let item= document.querySelectorAll(".experience-item");
// let content=document.querySelectorAll(".experience-item__title");
// [...]item.addEventListener("mouseover",function(){
//     content.style.color="#fff";
//     item.style.background= "#d7e14";
    
// })

window.addEventListener("scroll",function(){
    var header= document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY>0);
})