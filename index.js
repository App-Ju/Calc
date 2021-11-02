'use strict'

const key = document.querySelector('#keyboard')
const input = document.querySelector('input')

key.addEventListener('click', buttonClick)

function buttonClick(event) {
    if (event.target.dataset.num) {
        input.value += event.target.textContent
    }

    if (event.target.dataset.ac) {
        input.value = ''
        localStorage.clear()
    }

    if (event.target.dataset.plus) {
        localStorage.setItem('Number', input.value)
        plus()
    }
}

function plus() {

    if (localStorage.getItem('Number+') === null && input.value !== "") {
        localStorage.setItem('Number+', input.value)
        localStorage.removeItem('Number')
        input.value = ''

    } else if (localStorage.getItem('Number+') !== null && input.value !== "") {
        input.value = +input.value + +localStorage.getItem('Number+')
        localStorage.setItem('Number+', localStorage.getItem('Number'))
        localStorage.removeItem('Number')//localStorage.clear()

    // } else if (localStorage.getItem('Number+') !== null && input.value === "") {
    //     localStorage.clear()
    }
}
