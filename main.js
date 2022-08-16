console.log("This is Shankhnaad 22");

let toggle = document.getElementById("toggle-button")
let search = true;

let dropdown = document.getElementById("dropdown");
dropdown.style.display = "none";

toggle.addEventListener('click', function(){

    if(search){
        console.log("I am in");
        dropdown.style.display = "block";
        search = false;
    }
    else{
        dropdown.style.display = "none";
        console.log("I am out");
        search = true;
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });