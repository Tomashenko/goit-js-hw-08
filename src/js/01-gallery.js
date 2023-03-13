// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryConteiner = document.querySelector('.gallery')

const galleryBox = createGalleryMarkup(galleryItems);

galleryConteiner.insertAdjacentHTML('beforeend', galleryBox);


function createGalleryMarkup(galleryItems) {
   return galleryItems.map(( {preview, original, description} ) => {
        return`
        <a class="gallery__item" href="${original}">
              <img
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}"
               />
        </a>
        `;
    } )
    .join('');
    
};

const lightbox = new SimpleLightbox('.gallery a',
 { captionsData: 'alt', captionPosition: 'bottom',
  captionDelay: 250});