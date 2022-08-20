const seeAllBtn = document.getElementById('see-all')
const showPictures =  document.querySelector('.picture5')
let isClicked = false

document.getElementById('open-menu').addEventListener('click', () => {
  document.getElementById('main-menu').classList.remove('active')
})

document.getElementById('close-menu').addEventListener('click', () => {
  document.getElementById('main-menu').classList.add('active')
})

seeAllBtn.addEventListener("click", () => {
    if (showPictures.classList.contains("active")) {
      document.querySelector('.picture5').classList.remove('active')
      document.querySelector('.picture6').classList.remove('active')
      document.querySelector('.picture7').classList.remove('active')
      document.querySelector('.picture8').classList.remove('active')
      seeAllBtn.innerHTML = "SEE LESS"
    } else {
      document.querySelector('.picture5').classList.add('active')
      document.querySelector('.picture6').classList.add('active')
      document.querySelector('.picture7').classList.add('active')
      document.querySelector('.picture8').classList.add('active')
      seeAllBtn.innerHTML = "SEE ALL"
    }
})