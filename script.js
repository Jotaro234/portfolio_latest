function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Project images array - Add your image paths here
const projectImages = {
  0: [  // Project One images
    "./assets/ecommerce.png",
    "./assets/aboutss.png",
    "./assets/productss.png",
    "./assets/galleryss.png"
  ],
  1: [  // Project Two images
    "./assets/loginyy.jpg",
    "./assets/yumyy.jpg"
  ],
  2: [  // Project Three images
    "./assets/Skill Track.png",
    "./assets/regst.png",
    "./assets/selectst.png",
    "./assets/majorst.png",
    "./assets/studentst.png",
    "./assets/notifst.png",
    "./assets/modist.png",
    "./assets/managest.png",
    "./assets/archst.png"
  ]
};

let currentSlideIndex = 0;
let currentProjectIndex = 0;

function openModal(index) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  currentProjectIndex = index;
  currentSlideIndex = 0;
  modal.style.display = "block";
  modalImg.src = projectImages[currentProjectIndex][currentSlideIndex];
  
  // Start automatic slideshow
  startSlideshow();
}

let slideshowInterval;

function startSlideshow() {
  // Clear any existing interval
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
  }
  
  // Start new slideshow
  slideshowInterval = setInterval(() => {
    changeSlide(1);
  }, 3000); // Change slide every 3 seconds
}

function changeSlide(n) {
  const currentProjectImages = projectImages[currentProjectIndex];
  currentSlideIndex += n;
  
  // Handle wrapping around
  if (currentSlideIndex >= currentProjectImages.length) {
    currentSlideIndex = 0;
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = currentProjectImages.length - 1;
  }
  
  document.getElementById("modalImage").src = currentProjectImages[currentSlideIndex];
}

// Close the modal when clicking the close button
document.querySelector(".close").onclick = function() {
  document.getElementById("imageModal").style.display = "none";
  // Stop the slideshow when closing
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
  }
}

// Close the modal when clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
    // Stop the slideshow when closing
    if (slideshowInterval) {
      clearInterval(slideshowInterval);
    }
  }
}
