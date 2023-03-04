import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function createMarkupItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery">
    <li class="gallery_item">
    <a href="#">
    <img 
    class="gallery__image"
    src="${preview}" 
    data-source="${original}"
    alt="${description}">
    </a>
    </li>
  </div>`;
    })
    .join('');
}

const markup = createMarkupItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup)

galleryEl.addEventListener('click', handlerImgClick);

function handlerImgClick(event) {

  if (event.target.nodeName !== 'IMG') {
    return;
  };

  event.preventDefault();

  const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" widht="800" height="600"> 
`)
instance.show();





}




