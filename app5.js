window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("h_top").style.top = "-100px";
        document.getElementById("h_bottom").style.top = "-100px";
      } else {
        document.getElementById("h_top").style.top = "auto";
        document.getElementById("h_bottom").style.top = "auto";
      }
}

//modal giỏ hàng
let list = document.querySelectorAll('.list .item');
list.forEach(item => {
  item.addEventListener('click', function(event){
      if(event.target.classList.contains('add')){
          var itemNew = item.cloneNode(true);
          let checkIsset  = false;

          let listCart = document.querySelectorAll('.cart .item');
          listCart.forEach(cart =>{
              if(cart.getAttribute('data-key') == itemNew.getAttribute('data-key')){
                  checkIsset = true;
                  cart.classList.add('danger');
                  setTimeout(function(){
                      cart.classList.remove('danger');
                  },1000)
              }
          })
          if(checkIsset == false){
              document.querySelector('.listCart').appendChild(itemNew);
          }

      }
  })
})
function Remove($key){
  let listCart = document.querySelectorAll('.cart .item');
  listCart.forEach(item => {
      if(item.getAttribute('data-key') == $key){
          item.remove();
          return;
      }
  })
}
const cart= document.querySelector(".header-cart");
const modal= document.querySelector(".modal");
cart.addEventListener("click",function(e){
  // e.target.stopPropagasion();
  // console.log(e.target);
  modal.classList.add("modal-active");
})
modal.addEventListener("click",function(e){
  e.target.classList.remove("modal-active");
})
// end modal giỏ hàng 
















// home slider 
const slideContainer = document.querySelector('.home-slider_container');
const slide = document.querySelector('.slider-main');

const interval = 3000;

let slides = document.querySelectorAll('.home-slider_items');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
// console.log(firstClone,lastClone);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);
// console.log(slides[index].style.marginRight);
const slideWidth = slides[index].offsetWidth;
console.log(slideWidth);

slide.style.transform = `translateX(${-slideWidth * index}px)`;

// console.log(slides);

const startSlide = () => {
slideId = setInterval(() => {
  moveToNextSlide();
}, interval);
};

const getSlides = () => document.querySelectorAll('.home-slider_items');

slide.addEventListener('transitionend', () => {
slides = getSlides();
if (slides[index].id === firstClone.id) {
  slide.style.transition = 'none';
  index = 1;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
}

if (slides[index].id === lastClone.id) {
  slide.style.transition = 'none';
  index = slides.length - 2;
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
}
});

const moveToNextSlide = () => {
slides = getSlides();
if (index >= slides.length - 1) return;
index++;
slide.style.transition = '.7s ease-out';
slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
if (index <= 0) return;
index--;
slide.style.transition = '.7s ease-out';
slide.style.transform = `translateX(${-slideWidth * index}px)`;
};
slideContainer.addEventListener('mouseenter', () => {
clearInterval(slideId);
});
slideContainer.addEventListener('mouseleave', startSlide);
startSlide();
// end home slider 





// rotate trai nghiem little brick
const experienceItems= document.querySelectorAll(".experience-item");
const text= document.querySelector(".experience-item__title span");

[...experienceItems].forEach((item) => item.addEventListener("mouseenter",function(e){
  e.target.querySelector(".experience-item__img").style.transform= "rotate(360deg)";
  e.target.querySelector(".experience-item__img").style.transition= "0.5s ease-in-out";
  e.target.querySelector(".experience-item__title span").style.color="white";
  
}));

[...experienceItems].forEach((item) => item.addEventListener("mouseleave",function(e){
  e.target.querySelector(".experience-item__img").style.transform= "rotate(-360deg)";
  e.target.querySelector(".experience-item__img").style.transition= "0.5s ease-in-out";
  e.target.querySelector(".experience-item__title span").style.color="#417505";
}));



// xử lý phần search
const textCarts= document.querySelectorAll(".content .title");
const itemCarts= document.querySelectorAll(".list .item");
const inputCart= document.querySelector(".form input");
const formCart= document.querySelector(".form");
// console.log(formCart);
// formCart.addEventListener("submit",function(e){
//     e.preventDefault();
//     inputValue= inputCart.value;

// })
