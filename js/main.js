// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

let elemContainer = document.querySelector(".elemContainer");
let fixed__image = document.querySelector(".fixed__image");

elemContainer.addEventListener("mouseenter", () => {
  fixed__image.style.display = "block";
});
elemContainer.addEventListener("mouseleave", (event) => {
    if (!event.relatedTarget || !fixed__image.contains(event.relatedTarget)) {
        fixed__image.style.display = "none";
    }
});

let elem = document.querySelectorAll(".elem");
elem.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let src = e.getAttribute("imageData");
    fixed__image.style.backgroundImage = `url(${src})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1024: { slidesPerView: 4 }, // ল্যাপটপে ৪টা
    768: { slidesPerView: 3 },  // ট্যাবলেটে ৩টা
    480: { slidesPerView: 2 },  // মোবাইলে ২টা
    0: { slidesPerView: 1 }     // ছোট স্ক্রিনে ১টা
}
});

const contentData = [
  {
    type: "design",
    img: "https://sundown-ivory.vercel.app/page4-1.webp",
    text: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",
  },
  {
    type: "project",
    img: "https://sundown-ivory.vercel.app/page4-2.webp",
    text: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",
  },
  {
    type: "execution",
    img: "https://sundown-ivory.vercel.app/page4-3.webp",
    text: "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.",
  },
];


const buttons = document.querySelectorAll(".tab-button");
const image = document.getElementById("display-image");
const text = document.getElementById("summary-text");

buttons.forEach((button)=>{
  button.addEventListener("click", ()=>{
    let activebutton = document.querySelector(".tab-button.active")
    activebutton.classList.remove("active")
    button.classList.add("active")

    let clickedButton = button.getAttribute("data-tab")
    let content = contentData.find(item => item.type === clickedButton)

    image.src = content.img;
    text.innerText = content.text
    
  })
})

let full = document.querySelector(".full_scr")
var menu = document.querySelector(".respMenu");
var flag = 0
menu.addEventListener("click", ()=>{
  if(flag === 0){
    full.style.top = 0;
    flag = 1 ;
  }else{
    full.style.top = "-100%"
    flag= 0
  }
})

