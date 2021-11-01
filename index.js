'use strict'

const buttonNum = document.querySelector('#keyboard')
const input = document.querySelector('input')

buttonNum.addEventListener('click', buttonClick)

function buttonClick(event) {
    if (event.target.dataset.num) {
        input.value += event.target.textContent
    } localStorage.setItem('Number', 'input.value')

    if (event.target.dataset.ac) {
        input.value = ''
        localStorage.removeItem('Number')
    }
}


console.log(buttonNum)