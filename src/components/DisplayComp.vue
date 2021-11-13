<template>
  <div class="input">
    {{ disp }}
  </div>
</template>

<script>

export default {
  name: "DisplayComp",
  props: {
    disp: {type: String, required: true}
  },
}
</script>

<style scoped>
.input {
  display: block;
  width: 14rem;
  height: 3.5rem;
  margin: 0.3rem auto 1rem auto;
  border-style: solid;
  border-radius: 0.6rem;
  text-align: right;
  padding-top: 0.9rem;
  padding-right: 0.3rem;
}
</style>