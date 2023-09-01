"use strict";

const images = [

    { id: "2", url: "./img/inuyasha.jpg" },
    { id: "3", url: "./img/ippo.png" },
    { id: "4", url: "./img/tenchi.jpg" },
    { id: "5", url: "./img/tenjhotenge.jpg" },
    { id: "6", url: "./img/yuyuhakusho.jpg" },
    { id: "7", url: "./img/chrono.jpg" },
    
];

const container = document.querySelector(".container-items");

const loadImages = (images, container) => {
  images.forEach((img) => {
    container.innerHTML += `
        <div class='item'>
            <img src='${img.url}' alt='Image ${img.id}'>
        </div>
        `;
  });
};

let imageIndex = 0;

const showImage = (index) => {
  const items = document.querySelectorAll(".item");
  items.forEach((item, i) => {
    item.style.display = i === index ? "block" : "none";
  });
};

const nextImage = () => {
  imageIndex = (imageIndex + 1) % images.length;
  showImage(imageIndex);
};

loadImages(images, container);
showImage(imageIndex);
const interval = setInterval(nextImage, 2000);

const stopTime = () => {
    clearInterval(interval)
}

const next = () => {
  container.appendChild(container.firstElementChild);
  stopTime()
};

const previous = () => {
  container.insertBefore(container.lastElementChild, container.firstElementChild);
  stopTime()
};

document.querySelector("#next").addEventListener("click", next);
document.querySelector("#previous").addEventListener("click", previous);
