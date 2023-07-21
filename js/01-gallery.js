import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryImage = createElementOfGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryImage);

gallery.addEventListener('click', onImageClick);


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
    
    gallery.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
     instans.close();
  };
      
    });
  };
 
};

