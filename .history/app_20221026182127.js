// let item= document.querySelectorAll(".experience-item");
// let content=document.querySelectorAll(".experience-item__title");
// [...]item.addEventListener("mouseover",function(){
//     content.style.color="#fff";
//     item.style.background= "#d7e14";
    
// })

window.addEventListener("scroll",function(){
    let headerShow=document.getElementsByClassName(".header-show");
    console.log(headerShow);
    headerShow.classList.toggle("header_hidden",window.scrollY>0);
    // var headerContact= document.querySelector(".header-contact__list");
    // var headerBottom= document.querySelector(".header-bottom");
    // headerContact.classList.toggle("hidden",window.scrollY>0);
    // headerBottom.classList.toggle("sticky",window.scrollY>0);

})