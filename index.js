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
        localStorage.clear()
    }

    if (event.target.dataset.multiply) {
        equals()
        localStorage.setItem('Number', input.value)
        multiply()
    }

    if (event.target.dataset.divide) {
        equals()
        localStorage.setItem('Number', input.value)
        divide()
    }

    if (event.target.dataset.plus) {
        equals()
        localStorage.setItem('Number', input.value)
        plus()
    }

    if (event.target.dataset.minus) {
        equals()
        localStorage.setItem('Number', input.value)
        minus()
    }

    if (event.target.dataset.change) {
        if (input.value > 0) {
            input.value = `-${input.value}`

        } else if (input.value < 0) {
            let x = [...`${input.value}`].filter(e => e !== '-').join('')
            input.value = Number(x)
            console.log(x)
        }
    }

    if (event.target.dataset.percent) {
        percent()
    }
}

function equals() {
    if (localStorage.getItem('Number*') !== null) {
        input.value = +localStorage.getItem('Number*') * +input.value
        localStorage.clear()
    }

    if (localStorage.getItem('Number/') !== null) {
        input.value = +localStorage.getItem('Number/') / +input.value
        localStorage.clear()
    }

    if (localStorage.getItem('Number+') !== null) {
        input.value = +localStorage.getItem('Number+') + +input.value
        localStorage.clear()
    }

    if (localStorage.getItem('Number-') !== null) {
        input.value = +localStorage.getItem('Number-') - +input.value
        localStorage.clear()
    }
}

function multiply() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (localStorage.getItem('Number*') === null && input.value !== "") {
        localStorage.setItem('Number*', input.value)
        localStorage.removeItem('Number')
        input.value = ''

    } else if (localStorage.getItem('Number*') !== null && input.value !== "") {
        equals()
        localStorage.setItem('Number*', input.value)
    }
}

function divide() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (localStorage.getItem('Number/') === null && input.value !== "") {
        localStorage.setItem('Number/', input.value)
        localStorage.removeItem('Number')
        input.value = ''

    } else if (localStorage.getItem('Number/') !== null && input.value !== "") {
        equals()
        localStorage.setItem('Number/', input.value)
    }
}

function plus() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (localStorage.getItem('Number+') === null && input.value !== "") {
        localStorage.setItem('Number+', input.value)
        localStorage.removeItem('Number')
        input.value = ''

    } else if (localStorage.getItem('Number+') !== null && input.value !== "") {
        equals()
        localStorage.setItem('Number+', input.value)
    }
}

function minus() {
    document.querySelectorAll('.buttonNum').forEach(e => e.setAttribute('data-run', 'true'))
    if (localStorage.getItem('Number-') === null && input.value !== "") {
        localStorage.setItem('Number-', input.value)
        localStorage.removeItem('Number')
        input.value = ''

    } else if (localStorage.getItem('Number-') !== null && input.value !== "") {
        equals()
        localStorage.setItem('Number-', input.value)
    }
}

function percent() {
    if (localStorage.getItem('Number*') !== null) {
        input.value = +localStorage.getItem('Number*') /100 * +input.value

    } else if (localStorage.getItem('Number/') !== null) {
        input.value = +localStorage.getItem('Number/') /100 * +input.value

    } else if (localStorage.getItem('Number+') !== null) {
        input.value = +localStorage.getItem('Number+') /100 * +input.value

    } else if (localStorage.getItem('Number-') !== null) {
        input.value = +localStorage.getItem('Number-') /100 * +input.value

    } else {
        input.value = +input.value / 100
    }
}
