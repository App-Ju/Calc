<template>
  <div class="hist">
    <div v-for="(v) in historyData">{{ v }}</div>
  </div>
</template>

<script>
export default {
  name: "HistoryComp",
  props: {
    historyData: {type: Array, required: true}
  }
}
</script>

<style scoped>
.hist {
  position: absolute;
  left: calc(50vw + 7.7rem);
  width: auto;
  min-width: 6rem;
  height: 23rem;
  margin: 1rem auto 0 0;
  padding: 0.5rem;
  text-align: right;
  border-style: solid;
  border-radius: 0.5rem;
  overflow: hidden;
  overflow-y: scroll;
}
</style>