// let item= document.querySelectorAll(".experience-item");
// let content=document.querySelectorAll(".experience-item__title");
// [...]item.addEventListener("mouseover",function(){
//     content.style.color="#fff";
//     item.style.background= "#d7e14";
    
// })

// header scroll
window.addEventListener("scroll",function(){
    // let headerShow=document.querySelector(".header");
    // headerShow.classList.toggle("header_hidden",window.scrollY>0);
    var headerContact= document.querySelector(".header-contact__list");
    var headerBottom= document.querySelector(".header-bottom");
    var header=document.querySelector(".header");
    headerContact.classList.toggle("scroll-hidden",window.scrollY>0);
    headerBottom.classList.toggle("scroll-sticky",window.scrollY>0);
    header.classList.toggle("scroll-header",window.scrollY>0);
})


// menu link hover effect 
window.addEventListener("load", function(){
    const links= [...document.querySelectorAll(".header-nav_link")];
    // console.log(links);
    links.forEach( (item) => item.addEventListener("mouseenter", handleHoverLink));

    const line= document.querySelector(".line-effect");
    // console.log(line);
    // const line= document.createElement("div");
    // line.className= "line-effect";
    // document.body.appendChild(line);


    function handleHoverLink(event){
        const {left, top, width, height, right}= event.target.getBoundingClientRect();
        console.log({left,top,width,height,right});
        const offsetLeft= event.target.offsetLeft;
        
        line.style.width= `${width}px`;
        line.style.left= `${right -left}px`;
        line.style.top= `${top + top/2}px`;
    }


    const nav= document.querySelector(".header-nav");
    nav.addEventListener("mouseleave", function(){
        line.style.width=0;
    })

})