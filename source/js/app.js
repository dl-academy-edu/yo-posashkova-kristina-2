window.addEventListener('DOMContentLoaded', function () {

});

const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('.banner__js')
const popupClose = document.querySelector('.close__btn')
const checkbox = document.querySelector('.custom__checkbox')
const submit = document.querySelector('.popup__btn')
const popupOverlay = document.querySelector('.popup__overlay')
const inputName = document.querySelector('.input__name')
const inputMail = document.querySelector('.input__email')
const inputPhone = document.querySelector('.input__phone')
const inputMessage = document.querySelector('.message')

const menuMobile = document.querySelector('.header-mobile')
const menuBtn = document.querySelector('.menu-mobile')
const menuClose = document.querySelector('.menu-mobile__btn')


let stateModal = false

menuBtn.addEventListener('click', () => {
        menuMobile.classList.add('header-mobile__open')
        menuBtn.classList.add('menu-mobile__none')
        menuClose.classList.add('menu-mobile__btn_on')
})

menuClose.addEventListener ('click', () => {
    menuClose.classList.remove('menu-mobile__btn_on')
    menuBtn.classList.remove('menu-mobile__none')
    menuMobile.classList.remove('header-mobile__open')
})




popupBtn.addEventListener('click', () => {
    submit.setAttribute('disabled', 'true')
    popup.classList.add('popup__open')
})


checkbox.addEventListener('input', () => {
    if (checkbox.checked) {
    submit.removeAttribute('disabled', 'true')
    }
    else {
    submit.setAttribute('disabled', 'true')
    }
})

popupClose.addEventListener('click', () => {
    closePopup()
})

popupOverlay.addEventListener('click', () => {
    closePopup()
})

submit.addEventListener('click', () => {
    closePopup()
    clearForm()

})

const clearForm = () => {
    inputName.value = ''
    inputPhone.value = ''
    inputMail.value = ''
    inputMessage.value = ''
}

const closePopup = () => {
    popup.classList.remove('popup__open')
    checkbox.checked = false
    submit.setAttribute('disabled', 'true')
}

