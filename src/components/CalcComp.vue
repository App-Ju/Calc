<template>
  <div>
    <advanced-keyboard
        :advVisibility="advancedVisibility"
    ></advanced-keyboard>

    <div class="calc">
      <display-comp :disp="displayValue"></display-comp>

      <key-board
          @zhmyak="zhmyak"
          @showHistory="showHistory"
          @showAdvanced="showAdvanced"
      ></key-board>
    </div>

    <history-comp
        :historyData="historyData"
        :Visibility="historyVisibility"
    ></history-comp>
  </div>
</template>

<script>
import KeyBoard from './KeyBoard.vue';
import DisplayComp from './DisplayComp.vue';
import HistoryComp from './HistoryComp.vue';
import AdvancedKeyboard from './AdvancedKeyboard.vue';

export default {
  name: "CalcComp",
  components: {AdvancedKeyboard, HistoryComp, KeyBoard, DisplayComp},

  data() {
    return {
      getSign: ['+', '-', '*', '/'],
      getNumber: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      addedNumbers: [],
      equalsCheck: false,
      historyData: [],
      historyVisibility: false,
      advancedVisibility: false
    }
  },

  methods: {
    zhmyak(btnValue) {
      switch (btnValue) {

        case "=":
          if (isNaN(+this.addedNumbers.slice(-1))) {
            this.addedNumbers.splice(-1, 1)
            this.equalsCheck = true

          } else {
            this.equalsCheck = true
          }
          break;

        case `${this.getNumber.find(e => e === btnValue)}`:
          if (this.equalsCheck === true || this.displayValue === '0') {
            this.addedNumbers = []
            this.equalsCheck = false
            this.addedNumbers.push(btnValue)

          } else {
            this.addedNumbers.push(btnValue)
          }
          break;

        case `${this.getSign.find(e => e === btnValue)}`:
          if (isNaN(+this.addedNumbers.slice(-1))) {
            this.equalsCheck = false
            this.addedNumbers.splice(-1, 1)
            this.addedNumbers.push(btnValue)

          } else {
            this.equalsCheck = false
            this.addedNumbers.push(btnValue)
          }
          break;

        case 'AC':
          this.addedNumbers = []
          this.equalsCheck = false
          break;

        case '<':
          if (this.equalsCheck === false) {
            this.addedNumbers.splice(-1)
          }
          break;

        case '.':
          const dotVar = this.addedNumbers.join('') + '.'
          if (this.displayValue === '') {
            this.addedNumbers = [0, '.']

          } else if ((eval(dotVar) && this.equalsCheck === false)
              || (this.displayValue === '0' && this.equalsCheck === false)) {
            this.addedNumbers.push(btnValue)
          }
          break;

        case '%':
          if (!isNaN(this.displayValue)) {
            this.addedNumbers = [+this.displayValue / 100]
          }
          break;

        case '+/-':
          if (!isNaN(this.displayValue.split('').shift())) {
            this.addedNumbers.unshift('-')

          } else {
            this.addedNumbers.shift()
          }
          break;
      }
    },

    showHistory() {
      this.historyVisibility = !this.historyVisibility;
    },

    showAdvanced() {
      this.advancedVisibility = !this.advancedVisibility;
    }
  },

  computed: {
    displayValue() {
      return this.addedNumbers.join('')
    }
  },

  watch: {
    equalsCheck() {
      if (this.equalsCheck) {
        this.historyData.unshift(this.displayValue)
        const sum = (eval(this.displayValue))
        this.addedNumbers = []
        this.addedNumbers.push(sum)
        this.historyData.unshift(`= ${this.displayValue}`)
      }
    },
  }
}
</script>

<style scoped>
.calc {
  box-sizing: border-box;
  position: absolute;
  right: calc(50vw - 7.5rem);
  width: 15rem;
  height: 24.5rem;
  margin: 1rem 0 0 auto;
  border-style: solid;
  border-radius: 1rem;
  background: #9b9fa1;
  font-family: "Helvetica Neue", Calibri, sans-serif;
}
</style>