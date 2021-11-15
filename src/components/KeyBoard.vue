<template xmlns="">
  <div class="keyboard">
    <div class="inputDiv">
      <input
          @change="$emit('showHistory')"
          type="checkbox" id="History" name="HistoryName" class="input">
      <lebel for="History">History</lebel>
    </div>
    <div class="inputDiv">
      <input type="checkbox" id="Adv" name="AdvName" class="input" disabled>
      <lebel for="Adv">Advanced</lebel>
    </div>
    <button-key
        v-for="(btnValue) in buttons"
        :key="btnValue.name"
        :value="btnValue"
        @zhmyak="$emit('zhmyak', btnValue)"
    ></button-key>
  </div>
</template>

<script>
import ButtonKey from './ButtonKey.vue'

export default {
  name: 'KeyBoard',
  components: {ButtonKey},

  data() {
    return {
      buttons: ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5',
        '6', '-', '1', '2', '3', '+', '<', '0', '.', '=']
    }
  }
}
</script>

<style scoped>
.keyboard {
  width: 14rem;
  margin: 0 0.8rem;
}

.inputDiv {
  display: inline-block;
  box-sizing: border-box;
  width: 6.3rem;
  height: 2rem;
  margin-right: 0.13rem;
  font-size: 0.8rem;
}

.input {
  margin: 0.4rem;
}
</style>