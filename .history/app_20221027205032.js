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
    
    
    // menu hover effect
    var headerNavItem1s= [...document.querySelectorAll(".header-nav_items a")];
    headerNavItem1s.forEach( (item) => item.classList.add("header-nav_link"));
    var headerNavItem2s= [...document.querySelectorAll(".header-nav_items a")];
    if(window.scrollY >0){
        headerNavItem2s.forEach( (item) => item.classList.add("hoverEffect"));
    }
})


// menu link hover effect non scroll
window.addEventListener("load", function(){
    const link1s= [...document.querySelectorAll(".header-nav_link")];
    
    // console.log(links);
    link1s.forEach( (item) => item.addEventListener("mouseenter", handleHoverLink1));

    const line= document.querySelector(".line-effect");
    // console.log(line);
    // const line= document.createElement("div");
    // line.className= "line-effect";
    // document.body.appendChild(line);

    // scroll
    function handleHoverLink1(event){
        const {left, top, width, height, right}= event.target.getBoundingClientRect();
        // console.log({left,top,width,height,right});
        const offsetLeft= event.target.offsetLeft;
        const offsetTop= event.target.offsetTop;
        // console.log(offsetTop);
        // console.log(offsetLeft);
        line.style.width= `${width}px`;
        line.style.left= `${left}px`;
        line.style.top= `${top + offsetTop*4}px`;
    }
    const nav= document.querySelector(".header-nav");
    nav.addEventListener("mouseleave", function(){
        line.style.width=0;
    })

})
//  menu link hover effect have
window.addEventListener("load", function(){
    const link2s= [...document.querySelectorAll(".hoverEffect")];
    console.log(links);
 
    link2s.forEach( (item) => item.addEventListener("mouseenter", handleHoverLink2));

    const line= document.querySelector(".line-effect");

  
    function handleHoverLink2(event){
        const {left, top, width, height, right}= event.target.getBoundingClientRect();
        console.log({left,top,width,height,right});
        const offsetLeft= event.target.offsetLeft;
        const offsetTop= event.target.offsetTop;
        line.style.width= `${width}px`;
        line.style.left= `${offsetLeft}px`;
        line.style.top= `${offsetTop}px`;
    }


    const nav= document.querySelector(".header-nav");
    nav.addEventListener("mouseleave", function(){
        line.style.width=0;
    })

})