import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
console.log(gallery)

function createElementOfGallery(items) {
     return galleryItems.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
     <a class="gallery__link"  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt=" ${description}"
    />
  </a>
</li>`
    }).join('');

  

};
const galleryImage = createElementOfGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryImage);