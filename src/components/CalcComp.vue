<template>
  <div class="calc">
    <display-comp :disp="displayValue.join('')"></display-comp>
    <key-board @zhmyak="addNumber"></key-board>
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
      displayValue: [],
      calcValue: ''
    }
  },

  methods: {
    addNumber(btnValue) {
      if (!isNaN(Number(btnValue)) || btnValue === '*' || btnValue === '/' || btnValue === '+' || btnValue === '-') {
        this.displayValue.push(btnValue)
      }
      console.log('awesome', btnValue, this.displayValue)
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