import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
function createGalleryCardsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>
    `;
    }).join('');
};
const cardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click',(event) => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    
  const BanerUrl = event.target.dataset.source;
   
  const instance = basicLightbox.create(`
    <img src=${BanerUrl} width="800" height="600">
`)

instance.show()
function onCloseModal(event) {
    if (event.code === 'Escape') {
    instance.close()
}}

window.addEventListener('keydown',onCloseModal);

});
