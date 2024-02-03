document.addEventListener("DOMContentLoaded", function () {
  const photoElements = document.querySelectorAll(".photo");
  const header = document.querySelector("header");
  setTimeout(() => {
    header.classList.remove("hidden");
  }, 300);

  photoElements.forEach((photo, index) => {
    setTimeout(() => {
      photo.classList.remove("hidden");
    }, index * 200);
  });
});

function openLightbox(imageUrl, title, description, index) {
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDescription = document.getElementById("lightboxDescription");

  lightboxImg.src = imageUrl;
  lightboxTitle.textContent = title;
  lightboxDescription.textContent = description;
  lightboxOverlay.style.display = "flex";
  lightboxDescription.style.display = "block";

  currentIndex = index;

  lightboxOverlay.addEventListener("click", closeLightbox, true);
}

function closeLightbox() {
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  lightboxOverlay.style.display = "none";

  lightboxOverlay.removeEventListener("click", closeLightbox);
}

function openAboutModal() {
  const aboutModal = document.getElementById("aboutModal");
  aboutModal.style.display = "block";
  window.addEventListener("click", handleWindowClick, true);
}

function closeAboutModal() {
  const aboutModal = document.getElementById("aboutModal");
  aboutModal.style.display = "none";
  window.removeEventListener("click", handleWindowClick, true);
}

function handleWindowClick(event) {
  const aboutModal = document.getElementById("aboutModal");

  if (!aboutModal.contains(event.target)) {
    closeAboutModal();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const photoElements = document.querySelectorAll(".photo");
  const header = document.querySelector("header");

  setTimeout(() => {
    header.classList.remove("hidden");
  }, 300);

  photoElements.forEach((photo, index) => {
    setTimeout(() => {
      photo.classList.remove("hidden");
    }, index * 300);
  });

  const aboutLink = document.querySelector(".about");
  aboutLink.addEventListener("click", openAboutModal);
});

let images = [
  "img1/01.jpg",
  "img1/02.jpg",
  "img1/03.jpg",
  "img1/04.jpg",
  "img1/05.jpg",
  "img1/06.jpg",
  "img1/07.jpg",
  "img1/08.jpg",
  "img1/09.jpg",
  "img1/10.jpg",
  "img1/11.jpg",
  "img1/12.jpg",
];

let titles = [
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
  "Nunc blandit nisi ligula magna sodales lectus elementum non. Integer id venenatis velit.  ",
];

let descriptions = [
  "Magna feugiat lorem",
  "Nisl adipiscing",
  "Tempus aliquam veroeros",
  "Aliquam ipsum sed dolore",
  "Cursis aliquam nisl",
  "Sed consequat phasellus",
  "Mauris id tellus arcu",
  "Nunc vehicula id nulla",
  "Neque et faucibus viverra",
  "Mattis ante fermentum",
  "Sed ac elementum arcu",
  "Vehicula id nulla dignissim",
];

let currentIndex = 0;

function updateLightbox() {
  const lightboxImg = document.getElementById("lightboxImg");

  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDescription = document.getElementById("lightboxDescription");

  lightboxImg.src = images[currentIndex];

  lightboxTitle.textContent = getTitle(currentIndex);
  lightboxDescription.textContent = getDescription(currentIndex);
}
function getTitle(index) {
  return titles[index];
}
function getDescription(index) {
  return descriptions[index];
}

function nextPhoto() {
  currentIndex = (currentIndex + 1) % images.length;
  updateLightbox();
  const currImage = images[currentIndex];
  const title = getTitle(currentIndex);
  const description = getDescription(currentIndex);
  openLightbox(currImage, title, description, currentIndex);
}

function prevPhoto() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateLightbox();
  const currImage = images[currentIndex];
  const title = getTitle(currentIndex);
  const description = getDescription(currentIndex);
  openLightbox(currImage, title, description, currentIndex);
}

function showLightbox() {
  const lightboxOverlay = document.getElementById("lightboxOverlay");
  lightboxOverlay.style.display = "flex";
  currentIndex = 0;
  console.log(currentIndex);
}

updateLightbox();
