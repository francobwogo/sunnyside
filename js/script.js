const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


// Create a media condition that targets viewports at most 1024px wide
const mediaQuery = window.matchMedia('(max-width: 1024px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // Then change image source to mobile version
  document.getElementById("card-2-img").src = "./images/mobile/image-transform.jpg";
  document.getElementById("card-3-img").src = "./images/mobile/image-stand-out.jpg";
  document.getElementById("milk-bottles").src = "./images/mobile/image-gallery-milkbottles.jpg";
  document.getElementById("orange").src = "./images/mobile/image-gallery-orange.jpg";
  document.getElementById("cone").src = "./images/mobile/image-gallery-cone.jpg";
  document.getElementById("sugarcubes").src = "./images/mobile/image-gallery-sugar-cubes.jpg";
}