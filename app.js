const showOnPx = 10;
const backToTopButton = document.querySelector(".back-to-top");
const pageProgressBar = document.querySelector(".progress-bar1");
const parallelogram  = document.getElementsByClassName("paralleogram");
const schedule = document.getElementById("scroll");

window.addEventListener("scroll" , ()=>{
  let last_height = document.getElementById("last").getBoundingClientRect().top;
  let scroll1 = window.scrollY;
  let first_height = document.getElementById("first").getBoundingClientRect().top;
  console.log(`scroll = ${scroll1} and height  = ${first_height}`);
  let box_top = schedule.getBoundingClientRect().top;
  // console.log(scroll1);

  if(first_height < 0 && last_height > 0 ){
    let number_of_boxes = scroll1/(( last_height - first_height)/6) -6 
    console.log(number_of_boxes);

    for(let i = 0 ; i < 6  ; i++){
      if(i < number_of_boxes-1){
        parallelogram[i].style.backgroundColor = "#0C62E4"; 
      }
      else if(i === number_of_boxes){
        parallelogram[i].style.backgroundColor = "#0C62E4" ;
        parallelogram[i].style.opacity = `${scroll%((first_height - last_height)/6)}%` ;
      }
      else{
        
        parallelogram[i].style.backgroundColor = "white"; 
      }
    }
  }
  else if(first_height > 0){
    for(var i = 0 ;i < 6 ;i ++){
      parallelogram[i].style.backgroundColor = "white" ;
    }
  }




})

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-navbar");

  menuToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("open");
  });
});



const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  // console.log("Scroll Height: ", scrollContainer().scrollHeight);
  // console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);

// console.log("hello");

