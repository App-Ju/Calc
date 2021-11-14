<template>
  <div class="keyboard">
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
</style>