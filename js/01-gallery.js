import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
console.log(gallery)


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
const galleryImage = createElementOfGallery(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryImage);

gallery.addEventListener('click', onImageClick);

 
function onImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  } else {
    window.addEventListener('keydown', onEscKeypress);
    const result = basicLightbox.create(`
    <img src=${event.target.dataset.source}  >
`)
    result.show();
   
  };
 window.removeEventListener('keydown', onEscKeypress);
};

 

function onEscKeypress(event) {
  console.log(event)
 
  // if (event.code === 'Escape') {
    
  //  console.log('Закрыть модалку')
  // };
// return
};
