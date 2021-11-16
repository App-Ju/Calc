<template xmlns="">
  <div class="keyboard">

    <div class="inputDiv">
      <input
          @change="$emit('switchHistoryVisibility')"
          type="checkbox" id="History" name="HistoryName" class="input"
      >
      <label for="History">History</label>
    </div>
    <div class="inputDiv">
      <input
          @change="$emit('switchAdvancedVisibility')"
          type="checkbox" id="Adv" name="AdvName" class="input"
      >
      <label for="Adv">Advanced</label>
    </div>

    <button-key
        v-for="(btnValue, key) in buttons"
        :key="key"
        :value="btnValue"
        @zhmyak="$emit('zhmyak', btnValue)"
    />

  </div>
</template>

<script>
import ButtonKey from './ButtonKey.vue'

export default {
  name: 'KeyBoard',
  components: {
    ButtonKey
  },

  data() {
    return {
      buttons: [
        'AC',
        '+/-',
        '%',
        '/',
        '7',
        '8',
        '9',
        '*',
        '4',
        '5',
        '6',
        '-',
        '1',
        '2',
        '3',
        '+',
        '<',
        '0',
        '.',
        '=']
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