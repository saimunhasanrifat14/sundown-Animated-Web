const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

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
