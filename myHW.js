import items from './gallery-items.js'

const createGallery = (item) => {
  const itemRef = document.createElement(`li`)
  itemRef.classList.add(`gallery__item`)

  const linkRef = document.createElement(`a`)
  linkRef.classList.add(`gallery__link`)
  linkRef.setAttribute(`href`, `${item.original}`)

  const imgRef = document.createElement(`img`)
  imgRef.classList.add(`gallery__image`)
  imgRef.setAttribute(`src`, `${item.preview}`)
  imgRef.setAttribute(`data-source`, `${item.original}`)
  imgRef.setAttribute(`alt`, `${item.description}`)

  linkRef.appendChild(imgRef)
  itemRef.appendChild(linkRef)

  return itemRef
}

const itemGallery = items.map((item) => createGallery(item))

const itemListRef = document.querySelector('.js-gallery')
itemListRef.append(...itemGallery)

const openBox = document.querySelector('.js-lightbox')
const imageOnModal = document.querySelector('.lightbox__image')
const closeModalBtn = document.querySelector(
  'button[data-action="close-lightbox"]'
)

itemListRef.addEventListener('click', onOpenModal)
closeModalBtn.addEventListener('click', onCloseModal)
itemListRef.addEventListener('click', onGalleryClick)

function onGalleryClick(event) {
  event.preventDefault()

  if (event.target.nodeName !== 'IMG') {
    return
  }

  const largeImgUrl = event.target.dataset.source

  setLargeImage(largeImgUrl)
}
function setLargeImage(url) {
  imageOnModal.src = url
}

function onOpenModal() {
  openBox.classList.add('is-open')
}

function onCloseModal() {
  openBox.classList.remove('is-open')
  imageOnModal.removeAttribute('src')
}
