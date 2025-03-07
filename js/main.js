const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let elemContainer = document.querySelector(".elemContainer");
let fixed__image = document.querySelector(".fixed__image");

elemContainer.addEventListener("mouseenter", () => {
  fixed__image.style.display = "block";
});
elemContainer.addEventListener("mouseleave", () => {
  fixed__image.style.display = "none";
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
});

const contentData = [
  {
    type: "design",
    img: "https://sundown-ivory.vercel.app/page4-1.webp",
    text: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative.",
  },
  {
    type: "project",
    img: "https://sundown-ivory.vercel.app/page4-2.webp",
    text: "We manage projects efficiently from concept to execution, ensuring every detail aligns with the vision and goals of our clients.",
  },
  {
    type: "execution",
    img: "https://sundown-ivory.vercel.app/page4-3.webp",
    text: "Our execution process brings designs to reality, using high-quality materials and precise techniques to ensure outstanding results.",
  },
];

// Select DOM elements
const buttons = document.querySelectorAll(".tab-button");
const image = document.getElementById("display-image");
const text = document.getElementById("summary-text");

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove 'active' class from the currently active button
    document.querySelector(".tab-button.active").classList.remove("active");

    // Add 'active' class to the clicked button
    button.classList.add("active");

    // Get the corresponding content using data-tab attribute
    const tab = button.getAttribute("data-tab");
    const tabContent = contentData.find((item) => item.type === tab);

    // Update the image and text immediately
    image.src = tabContent.img;
    text.innerText = tabContent.text;
  });
});
