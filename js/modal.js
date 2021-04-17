// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'


const $modal = document.querySelector('.Modal__container')
// const $modalContent = document.querySelector('.modal-content');
const $btnClose = document.querySelector('.Modal__posts-close')
const $btnBuy = document.querySelector('.Modal__posts-cart')
const $modalImg = document.querySelector('.Modal-img')

const $gamesList = document.querySelectorAll('.Games__posts-game')
const $title = document.querySelector('.Modal__posts-info--title')
const $description = document.querySelector('.Modal__posts-info--despcrition')
const $price = document.querySelector('.Modal__posts-info--price')


$gamesList.forEach((list, index) => {
  // console.log(list, index)
  const view = list.querySelector('.eye-view')
  const gamesImg = list.querySelector('.Games-img').getAttribute('src');
  const gamesTitles = list.querySelector('.Games__posts-info--title')
  const gamesDescription = list.querySelector('.Games__posts-info--despcrition')
  const gamesPrice = list.querySelector('.Games__posts-info--price')


  view.addEventListener('click', () => {
    //Abrir el modal con icono eye
    $modal.classList.add('active')
    $modalImg.setAttribute('src', gamesImg)
    $title.innerHTML = `${gamesTitles.innerText}`

    //Validar que haya descripción

    $description.innerHTML = `${gamesDescription.innerText}`

    //Asignamos precio de Game
    $price.innerHTML = `${gamesPrice.innerText}`





  })

});
//Comprar en modal
$btnBuy.addEventListener('click', () => {
  Swal.fire({
    title: 'Add to cart',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'Exit'
  })
  $modal.classList.remove('active')


})

//Cerrar el modal..
$btnClose.addEventListener('click', () => {
  $modal.classList.remove('active')

})

