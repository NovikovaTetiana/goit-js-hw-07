import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function createMarkupItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

const markup = createMarkupItems(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", handlerImgClick);

function handlerImgClick(event) {

  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  // Open modal
  const instance = basicLightbox.create(`
<img src="${event.target.dataset.source}" widht="800" height="600"> 
`);

  instance.show();

  // Close modal

  window.addEventListener("keydown", handlerOffModal);

  function handlerOffModal(e) {
    if (e.code === "Escape") {
      window.removeEventListener("keydown", handlerOffModal);
      instance.close();
    }
  }
}
