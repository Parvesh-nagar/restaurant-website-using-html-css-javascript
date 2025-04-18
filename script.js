
let menu_bar = document.querySelector("#bar");
let navbar = document.querySelector(".navbar");

menu_bar.onclick = () => {
  menu_bar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};


window.onscroll = ()=>{
  menu_bar.classList.remove("fa-times");
  navbar.classList.remove("active");
}

document.querySelector("#search_bar").onclick = ()=>{
    document.querySelector("#search-form").classList.toggle("active");
}

let close = document.querySelector("#close");
close.addEventListener("click",function(){
    document.querySelector("#search-form").classList.remove("active");
})

// swiper


var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

//favourites

let favourites = [];
let heartIcons = document.querySelectorAll(".fa-heart");

heartIcons.forEach(icon=>{
  icon.addEventListener("click",function(){

    let dishId = this.getAttribute("data-id");
     if(!favourites.includes(dishId)){
      favourites.push(dishId);
      this.style.color = "red";
      console.log(`Added to favourits ${dishId}`);
     }
     else{
      favourites.pop(dishId);
      this.style.color= "";
      console.log(`Removed to favourits ${dishId}`);

     }

  });
});
