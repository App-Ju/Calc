'use strict'

const key = document.querySelector('#keyboard')
const input = document.querySelector('input')

key.addEventListener('click', buttonClick)

function buttonClick(event) {
    if (event.target.dataset.num && event.target.dataset.run) {
        input.value = ''
        document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', ''))
        input.value += event.target.textContent
    } else if (event.target.dataset.num) {
        input.value += event.target.textContent
    }

    if (event.target.dataset.ac) {
        input.value = ''
        localStorage.clear()
    }

    if (event.target.dataset.plus) {
        localStorage.removeItem('Number*')
        localStorage.removeItem('Number/')
        localStorage.removeItem('Number-')
        localStorage.setItem('Number', input.value)
        plus()
    }

    if (event.target.dataset.minus) {
        localStorage.removeItem('Number*')
        localStorage.removeItem('Number/')
        localStorage.removeItem('Number+')
        localStorage.setItem('Number', input.value)
        minus()
    }
}

function plus() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (localStorage.getItem('Number+') === null && input.value !== "") {
        localStorage.setItem('Number+', input.value)
        localStorage.removeItem('Number')
        input.value = ''

    } else if (localStorage.getItem('Number+') !== null && input.value !== "") {
        input.value = +input.value + +localStorage.getItem('Number+')
        localStorage.setItem('Number+', input.value)
        localStorage.removeItem('Number')
    }
}

function minus() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (localStorage.getItem('Number-') === null && input.value !== "") {
        localStorage.setItem('Number-', input.value)
        localStorage.removeItem('Number')
        input.value = ''

    } else if (localStorage.getItem('Number-') !== null && input.value !== "") {
        input.value = +localStorage.getItem('Number-') - +input.value
        localStorage.setItem('Number-', input.value)
        localStorage.removeItem('Number')
    }
}