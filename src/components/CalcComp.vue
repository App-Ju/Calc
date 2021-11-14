<template>
  <div class="calc">
    <display-comp :disp="displayValue"></display-comp>
    <key-board @zhmyak="zhmyak"></key-board>
  </div>
</template>

<script>
import KeyBoard from './KeyBoard.vue';
import DisplayComp from './DisplayComp.vue';

export default {
  name: "CalcComp",
  components: {KeyBoard, DisplayComp},

  data() {
    return {
      getSign: ['+', '-', '*', '/'],
      getNumber: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
      addedNumbers: [],
      equalsCount: 0
    }
  },

  methods: {
    zhmyak(btnValue) {
      switch (btnValue) {
        case "=":
          this.equalsCount++
          console.log("It's alive ->", btnValue)
          break;

        case `${this.getNumber.find(e => e === btnValue)}`:
          this.addedNumbers.push(btnValue)
          break;

        case `${this.getSign.find(e => e === btnValue)}`:
          if (isNaN(+this.addedNumbers.slice(-1))) {
            this.addedNumbers.splice(-1, 1)
            this.addedNumbers.push(btnValue)

          } else {
            this.addedNumbers.push(btnValue)
          }
          break;
      }
    }
  },

  computed: {
    displayValue() {
      return this.addedNumbers.join('')
    },
  },

  watch: {
    equalsCount() {
      const i = (eval(this.displayValue))
      this.addedNumbers = []
      this.addedNumbers.push(i)
      this.equalsCount = 0
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
}
</style>