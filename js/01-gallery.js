import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryImage = createElementOfGallery(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryImage);
gallery.addEventListener('click', onImageClick);
// gallery.removeEventListener('keydown', onEscKeypress);


function createElementOfGallery(items) {
     return items.map(({ original, preview, description }) => {
        return `<li class="gallery__item">
     <a class="gallery__link"    href="${original}">
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

function onImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  } else {
    const instans = basicLightbox.create(`
     <img src=${event.target.dataset.source} >`);
     instans.show();
  };
 
};

gallery.addEventListener('keydown', onEscKeypress);

function onEscKeypress(event) {
 
  if (event.code === 'Escape') {
    const instans = basicLightbox.create(`
     <img src=${event.target.dataset.source} >`);
     instans.close();
 
  };

};
