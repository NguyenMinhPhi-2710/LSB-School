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
    const links= [...document.querySelectorAll("header-nav_link")];
    
    links.forEach( (item) => item.addEventListener("mouseenter", handleHoverLink));

    const line= document.querySelector(".line-effect");
    console.log(line);
    // const line= document.createElement("div");
    // line.className= "line-effect";
    // document.body.appendChild(line);


    function handleHoverLink(event){
        const {left, top, width, height}= event.target.getBoundingClientRect();
        console.log(width);
        // console.log( {left,top,width,height});
        // const offsetBottom= 5;
        line.style.width= `${width}px`;
        // line.style.left= `${left}px`;
        // line.style.top= `${top + height + offsetBottom}px`;
    }

    // const menu= document.querySelector(".menu");
    // menu.addEventListener("mouseleave", function(){
    //     line.style.width=0;
    // })

})