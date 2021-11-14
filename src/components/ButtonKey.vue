<template>
  <button
      @click.stop="$emit('zhmyak', value)"
      class="button"
  >{{ value }}</button>
</template>

<script>
export default {
  name: 'ButtonKey',
  props: {
    value: {type: String, required: true}
  }
}
</script>

<style scoped>
.button {
  box-sizing: border-box;
  font-size: 1.1rem;
  width: 3rem;
  height: 3rem;
  margin: 0.13rem;
  border-style: solid;
  border-radius: 1rem;
  background: #abb7b7;
}
</style>