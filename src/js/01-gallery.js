// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const listEl = document.querySelector("ul");
const cardsMarkup = itemsOfGallery(galleryItems);

listEl.insertAdjacentHTML("beforeend", cardsMarkup);

function itemsOfGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join("");
}

listEl.addEventListener("click", (event) => {
  event.preventDefault();
});

const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
}); 
