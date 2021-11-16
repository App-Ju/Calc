<template>
  <div class="advKeyboard" :class="displayAdvanced">
    <button-key
        v-for="(advBtnValue, key) in advButtons"
        :key="key"
        :value="advBtnValue"
        @zhmyak="$emit('zhmyak', advBtnValue)"
        class="btn"
    ></button-key>
  </div>
</template>

<script>
import ButtonKey from './ButtonKey.vue'

export default {
  name: "AdvancedKeyboard",
  components: {
    ButtonKey
  },

  props: {
    advVisibility: {type: Boolean, required: true}
  },

  data() {
    return {
      advButtons: [
        'mc',
        'm+',
        'm-',
        'mr',
        'x2',
        'x3',
        'xy',
        '10x',
        '1/x',
        '2x',
        '3x',
        'yx',
        'x!',
        'e',
        'ex',
        'п'
      ]
    }
  },

  computed: {
    displayAdvanced() {
      return {
        show: this.advVisibility,
        hide: !this.advVisibility
      }
    }
  }
}
</script>

<style scoped>
.advKeyboard {
  padding: 0.5rem 0.7rem;
  box-sizing: border-box;
  position: absolute;
  right: calc(50vw + 8.3rem);
  width: 15rem;
  height: 14.5rem;
  margin: 11rem 0 0 auto;
  border-style: solid;
  border-radius: 1rem;
  background: #9b9fa1;
  font-family: "Helvetica Neue", Calibri, sans-serif;
}

.hide {
  display: none;
}

.show {
}
</style>