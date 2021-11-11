<template>
  <div class="app">
    <div class="calc">
      <label>
        <input
            v-model='inputValue'
            type="number">
      </label>
      <div id="keyboard">
        <button class="adv" disabled>Advenced</button>
        <button @click="show" class="adv">History</button>

        <button @click="clear"> {{ clearButton }}</button>
        <button @click="changeSign">+/-</button>
        <button @click="percent">%</button>
        <button @click="divide">/</button>

        <button @click="addNumber">7</button>
        <button @click="addNumber">8</button>
        <button @click="addNumber">9</button>
        <button @click="multiply">*</button>

        <button @click="addNumber">4</button>
        <button @click="addNumber">5</button>
        <button @click="addNumber">6</button>
        <button @click="minus">-</button>

        <button @click="addNumber">1</button>
        <button @click="addNumber">2</button>
        <button @click="addNumber">3</button>
        <button @click="plus">+</button>

        <button @click="backspace">&lt;</button>
        <button @click="addNumber">0</button>
        <button @click="">.</button>
        <button @click="equals">=</button>
      </div>
    </div>
    <div v-show="history" class="hist">

    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputValue: '',
      numberMultiply: null,
      numberDivide: null,
      numberPlus: null,
      numberMinus: null,
      clearButton: 'AC',
      checkEquals: 0,
      history: '',
      historyArr: []
    }
  },
  methods: {
    addNumber(event) {
      if (this.checkEquals > 0) {
        this.inputValue = ''
      }
      this.inputValue += event.target.textContent
      this.checkEquals = 0
    },

    clear() {
      if (this.clearButton === 'C') {
        this.inputValue = ''
      } else {
        this.numberMultiply = null
        this.numberDivide = null
        this.numberPlus = null
        this.numberMinus = null
      }
    },

    multiply() {
      this.equals()
      this.numberMultiply = this.inputValue
    },

    divide() {
      this.equals()
      this.numberDivide = this.inputValue
    },

    plus() {
      this.equals()
      this.numberPlus = this.inputValue
    },

    minus() {
      this.equals()
      this.numberMinus = this.inputValue
    },

    equals() {
      if (this.numberMultiply !== null) {
        this.inputValue = +this.numberMultiply * +this.inputValue
        this.numberMultiply = null
      }

      if (this.numberDivide !== null) {
        this.inputValue = +this.numberDivide / +this.inputValue
        this.numberDivide = null
      }

      if (this.numberPlus !== null) {
        this.inputValue = +this.numberPlus + +this.inputValue
        this.numberPlus = null
      }

      if (this.numberMinus !== null) {
        this.inputValue = +this.numberMinus - +this.inputValue
        this.numberMinus = null
      }
      this.checkEquals++
    },

    changeSign() {
      if (this.inputValue > 0) {
        this.inputValue = `-${this.inputValue}`

      } else if (this.inputValue < 0) {
        this.inputValue = [...`${this.inputValue}`].filter(e => e !== '-').join('')
      }
    },

    percent() {
      this.numberMultiply !== null ? this.inputValue = +this.numberMultiply / 100 * this.inputValue
          : this.numberDivide !== null ? this.inputValue = +this.numberDivide / 100 * +this.inputValue
          : this.numberPlus !== null ? this.inputValue = +this.numberPlus / 100 * +this.inputValue
              : this.numberMinus !== null ? this.inputValue = +this.numberMinus / 100 * +this.inputValue
                  : this.inputValue = this.inputValue / 100
    },

    backspace() {
      this.inputValue = [...`${this.inputValue}`].slice(0, [].length - 1).join('')
    },

    show() {
      this.history ? this.history = '' : this.history = 1
    }
  },

  watch: {
    inputValue() {
      this.inputValue === '' ? this.clearButton = 'AC' : this.clearButton = 'C'
    }
  }
}
</script>

<style src="./app.css"></style>
