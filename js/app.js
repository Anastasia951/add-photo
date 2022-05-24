document.addEventListener('DOMContentLoaded', () => {
  initBurger()
  // initModals()
})

const initBurger = () => {
  const burger = document.querySelector(`[data-burger]`)
  const menu = document.querySelector(`[data-menu]`)

  burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    menu.classList.toggle('show')
    document.body.classList.toggle('lock')
  })
}

const initModals = () => {
  const modalBtns = document.querySelectorAll(`[data-modal]`)
  const closeBtns = document.querySelectorAll(`[data-close]`)
  modalBtns.forEach(btn => btn.addEventListener('click', openModal))
  closeBtns.forEach(btn => btn.addEventListener('click', closeModal))
}

const openModal = (event) => {
  event.preventDefault()
  const modalStr = event.target.dataset.modal
  let modalWindow = document.querySelector(`[data-parent="${modalStr}"]`)
  modalWindow.classList.add('active')
  document.body.classList.add('lock')
}

const closeModal = (event) => {
  event.preventDefault()
  const modalWindow = event.target.closest('.modal')
  modalWindow.classList.remove('active')
  document.body.classList.remove('lock')
}