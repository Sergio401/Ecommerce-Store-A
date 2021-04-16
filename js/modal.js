const $modal = document.querySelector('.Modal__container')
const $modalContent = document.querySelector('.modal-content');
const $btnClose = document.querySelector('.Modal__posts-close')
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

//Cerrar el modal..
$btnClose.addEventListener('click', () => {
  $modal.classList.remove('active')

})