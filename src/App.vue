<template>
  <div class="app">
    <label>
      <input
          v-model='inputValue'
          type="number">
    </label>
    <div id="keyboard">
      <div class="line">
        <button @click="clear">AC</button>
        <button>+/-</button>
        <button>%</button>
        <button @click="divide">/</button>
      </div>
      <div class="line">
        <button @click="addNumber">7</button>
        <button @click="addNumber">8</button>
        <button @click="addNumber">9</button>
        <button @click="multiply">*</button>
      </div>
      <div class="line">
        <button @click="addNumber">4</button>
        <button @click="addNumber">5</button>
        <button @click="addNumber">6</button>
        <button @click="minus">-</button>
      </div>
      <div class="line">
        <button @click="addNumber">1</button>
        <button @click="addNumber">2</button>
        <button @click="addNumber">3</button>
        <button @click="plus">+</button>
      </div>
      <div class="line">
        <button data-del="true">&lt;</button>
        <button @click="addNumber">0</button>
        <button data-comma="true">,</button>
        <button @click="equals">=</button>
      </div>
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
      checkEquals: 0
    }
  },
  methods: {
    addNumber(event) {
      this.numberMultiply !== null ? this.inputValue = ''
          : this.numberDivide !== null ? this.inputValue = ''
          : this.numberPlus !== null ? this.inputValue = ''
              : this.numberMinus !== null ? this.inputValue = ''
                  : this.checkEquals > 0 ? this.inputValue = ''
                      : 'nothing'
      this.inputValue += event.target.textContent
      this.checkEquals = 0
    },

    clear() {
      this.inputValue = ''
      this.numberMultiply = null
      this.numberDivide = null
      this.numberPlus = null
      this.numberMinus = null
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
    }
  },
}
</script>

<style src="./app.css"></style>
