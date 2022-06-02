document.addEventListener('DOMContentLoaded', () => {
  initBurger()
  initModals()
  initHideTextBlockBtns()
  initForms()
  autoComplete()
})

const completeInput = (event) => {
  const telInput = event.target
  if (event.key === 'Backspace' && telInput.value.length >= 4) return
  if (telInput.value.length < 4) {
    telInput.value = '+7('
  } else if (telInput.value.length === 10 || telInput.value.length === 13) {
    telInput.value += '-'
  } else if (telInput.value.length > 15) {
    telInput.value = telInput.value.slice(0, 15)
  } else if (telInput.value.length === 6) {
    telInput.value = telInput.value + ')'
  }
}

const autoComplete = () => {
  const telInput = document.querySelector(`[name="tel"]`)
  telInput.value = `+7(`
  telInput.addEventListener('keydown', completeInput)
}
const initForms = () => {
  const forms = document.querySelectorAll('form')
  forms.forEach(form => form.addEventListener('submit', checkData))
}
const initBurger = () => {
  const burger = document.querySelector(`[data-burger]`)
  const menu = document.querySelector(`[data-menu]`)

  if (burger) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open')
      menu.classList.toggle('show')
      document.body.classList.toggle('lock')
    })
  }
}

const hideTextBlocks = () => {
  const btn = event.target
  const textBlock = btn.closest('[data-text-block]')
  const hiddenText = textBlock.querySelector('[data-hidden-text]')
  if (btn && textBlock && hiddenText) {
    btn.classList.toggle('active')
    hiddenText.classList.toggle('text-block__hidden-none')
  }
}

const initHideTextBlockBtns = () => {
  const hideTextBlockBtns = document.querySelectorAll('[data-open-text-block]')
  if (hideTextBlockBtns.length) {
    hideTextBlockBtns.forEach(btn => btn.addEventListener('click', hideTextBlocks))
  }
}

const initModals = () => {
  const modalBtns = document.querySelectorAll(`[data-modal]`)
  const closeBtns = document.querySelectorAll(`[data-close]`)
  if (modalBtns.length && closeBtns.length) {
    modalBtns.forEach(btn => btn.addEventListener('click', openModal))
    closeBtns.forEach(btn => btn.addEventListener('click', closeModal))
  }
}
const checkTel = (number) => {
  // let regexp = /^+\d+\(\d{3}\$/
  return
}
const checkData = (event) => {
  event.preventDefault()
  const {name: nameVal, tel: telVal, email: emailVal} = event.target.elements
  const name = nameVal.value
  const tel = telVal.value
  const email = emailVal.value
  checkTel(tel)
  
}

const openModal = (event) => {
  event.preventDefault()
  console.log(event)
  const modalStr = event.target.dataset.modal
  let modalWindow = document.querySelector(`[data-parent="${modalStr}"]`)
  if (modalWindow) {
    modalWindow.classList.add('active')
    document.body.classList.add('lock')
  }
}

const closeModal = (event) => {
  event.preventDefault()
  const modalWindow = event.target.closest('.modal')
  if (modalWindow) {
    modalWindow.classList.remove('active')
    document.body.classList.remove('lock')
  }
}