import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryImage = createElementOfGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryImage);

gallery.addEventListener('click', onImageClick);
let lightbox = new SimpleLightbox('.gallery a',  {
    captionsData: 'alt',
      captionDelay: 250,
      close:false,
    });
   


function createElementOfGallery(items) {
     return items.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join('');

};

function onImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  else {
    return lightbox;

  };
   
 
};