<template>
  <button @click.stop="$emit('zhmyak')" class="btn">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: {type: String, required: true} 
  }
}
</script>

<style scoped>
  .btn {
    box-sizing: border-box;
    font-size: 1.1rem;
    width: 3rem;
    height: 3rem;
    margin: 0.13rem;
  }
</style>