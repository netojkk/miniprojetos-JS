"use strict";

const images = [
  { id: "1", url: "./img/chrono.jpg" },
  { id: "2", url: "./img/inuyasha.jpg" },
  { id: "3", url: "./img/ippo.png" },
  { id: "4", url: "./img/tenchi.jpg" },
  { id: "5", url: "./img/tenjhotenge.jpg" },
  { id: "6", url: "./img/yuyuhakusho.jpg" },
  
];

const container = document.querySelector(".container-items");

const loadImages = (images, container) => {
  images.forEach((img) => {
    container.innerHTML += `
        
        <div class = 'item'>
        
        <img src= '${img.url}'
        
        </div>
        `;
  });
};
loadImages(images, container);

let items = document.querySelectorAll(".item");
let imagesIndex = 0


const next = () => {
  container.appendChild(items[0]);
  items = document.querySelectorAll(".item");
 
};

const previous = () => {
  const lastItem = items[items.length - 1];
  container.insertBefore(lastItem, items[0]);
  items = document.querySelectorAll(".item");
};

document.querySelector("#next").addEventListener("click", next);
document.querySelector("#previous").addEventListener("click", previous);
