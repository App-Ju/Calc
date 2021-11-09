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

    if (event.target.dataset.equals) {
        equals()
    }

    if (event.target.dataset.ac) {
        input.value = ''
        sessionStorage.clear()
    }

    if (event.target.dataset.multiply) {
        equals()
        sessionStorage.setItem('Number', input.value)
        multiply()
    }

    if (event.target.dataset.divide) {
        equals()
        sessionStorage.setItem('Number', input.value)
        divide()
    }

    if (event.target.dataset.plus) {
        equals()
        sessionStorage.setItem('Number', input.value)
        plus()
    }

    if (event.target.dataset.minus) {
        equals()
        sessionStorage.setItem('Number', input.value)
        minus()
    }

    if (event.target.dataset.change) {
        if (input.value > 0) {
            input.value = `-${input.value}`

        } else if (input.value < 0) {
            input.value = [...`${input.value}`].filter(e => e !== '-').join('')
        }
    }

    if (event.target.dataset.percent) {
        percent()
    }

    if (event.target.dataset.del) {
        input.value = [...`${input.value}`].slice(0, [].length-1).join('')
    }
}

function equals() {
    if (sessionStorage.getItem('Number*') !== null) {
        input.value = +sessionStorage.getItem('Number*') * +input.value
        sessionStorage.clear()
    }

    if (sessionStorage.getItem('Number/') !== null) {
        input.value = +sessionStorage.getItem('Number/') / +input.value
        sessionStorage.clear()
    }

    if (sessionStorage.getItem('Number+') !== null) {
        input.value = +sessionStorage.getItem('Number+') + +input.value
        sessionStorage.clear()
    }

    if (sessionStorage.getItem('Number-') !== null) {
        input.value = +sessionStorage.getItem('Number-') - +input.value
        sessionStorage.clear()
    }
}

function multiply() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (sessionStorage.getItem('Number*') === null && input.value !== "") {
        sessionStorage.setItem('Number*', input.value)
        sessionStorage.removeItem('Number')
        input.value = ''

    } else if (sessionStorage.getItem('Number*') !== null && input.value !== "") {
        equals()
        sessionStorage.setItem('Number*', input.value)
    }
}

function divide() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (sessionStorage.getItem('Number/') === null && input.value !== "") {
        sessionStorage.setItem('Number/', input.value)
        sessionStorage.removeItem('Number')
        input.value = ''

    } else if (sessionStorage.getItem('Number/') !== null && input.value !== "") {
        equals()
        sessionStorage.setItem('Number/', input.value)
    }
}

function plus() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (sessionStorage.getItem('Number+') === null && input.value !== "") {
        sessionStorage.setItem('Number+', input.value)
        sessionStorage.removeItem('Number')
        input.value = ''

    } else if (sessionStorage.getItem('Number+') !== null && input.value !== "") {
        equals()
        sessionStorage.setItem('Number+', input.value)
    }
}

function minus() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (sessionStorage.getItem('Number-') === null && input.value !== "") {
        sessionStorage.setItem('Number-', input.value)
        sessionStorage.removeItem('Number')
        input.value = ''

    } else if (sessionStorage.getItem('Number-') !== null && input.value !== "") {
        equals()
        sessionStorage.setItem('Number-', input.value)
    }
}

function percent() {
    if (sessionStorage.getItem('Number*') !== null) {
        input.value = +sessionStorage.getItem('Number*') /100 * +input.value

    } else if (sessionStorage.getItem('Number/') !== null) {
        input.value = +sessionStorage.getItem('Number/') /100 * +input.value

    } else if (sessionStorage.getItem('Number+') !== null) {
        input.value = +sessionStorage.getItem('Number+') /100 * +input.value

    } else if (sessionStorage.getItem('Number-') !== null) {
        input.value = +sessionStorage.getItem('Number-') /100 * +input.value

    } else {
        input.value = input.value / 100
    }
}