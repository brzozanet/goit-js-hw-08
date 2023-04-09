import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";

const galleryEl = document.querySelector(".gallery");

for (const item of galleryItems) {
  const imageEl = document.createElement("li");
  imageEl.classList.add("gallery__item");
  imageEl.insertAdjacentHTML(
    "afterbegin",
    `
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a>
    `
  );
  galleryEl.append(imageEl);
}

const imageFromLightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 350,
});
