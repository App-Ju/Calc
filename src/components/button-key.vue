<template>
  <button @click="$emit('zhmyak')" class="btn"></button>
</template>

<script>
export default {
name: "button-key"
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