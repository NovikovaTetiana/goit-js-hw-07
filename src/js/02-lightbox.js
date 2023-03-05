import { galleryItems } from "./gallery-items.js";

const galleryElem = document.querySelector(".gallery");

function createMarkupItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__item" 
      href="${original}">
      <img 
      class="gallery__image" 
      src="${preview}"
      alt="${description}" />
      </a>
    </li>`;
    })
    .join("");
}
const markup = createMarkupItems(galleryItems);
galleryElem.insertAdjacentHTML("beforeend", markup);

galleryElem.addEventListener("click", handlerClickPicture);

function handlerClickPicture(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });
}
