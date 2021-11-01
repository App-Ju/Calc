// 'use strict'
const buttonNum = document.querySelector('#keyboard')
const input = document.querySelector('input')

// document.querySelectorAll('.buttonNum').setAttribute('data-num', 'true')
buttonNum.addEventListener('click', buttonClick)

function buttonClick(event) {
    event.target.dataset.num ?
        input.value += event.target.textContent :
        console.log('no')
}

console.log(buttonNum)