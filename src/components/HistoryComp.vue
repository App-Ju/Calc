<template>
  <div class="hist" :class="displayHistory">
    <h3 style="text-align: center">History:</h3>
    <div v-for="(v) in historyData">{{ v }}</div>
  </div>
</template>

<script>
export default {
  name: "HistoryComp",
  props: {
    historyData: {type: Array, required: true},
    Visibility: {type: Boolean, required: true}
  },
  computed: {
    displayHistory() {
      return {
        show: this.Visibility,
        hide: !this.Visibility
      }
    }
  }
}
</script>

<style scoped>
.hist {
  position: absolute;
  left: calc(50vw + 7.3rem);
  width: auto;
  min-width: 8rem;
  height: 24.5rem;
  margin: 1rem auto 0 0;
  padding: 0.5rem;
  text-align: right;
  border-style: solid;
  border-radius: 0.5rem;
  overflow: hidden;
  overflow-y: scroll;
  background: #fafafa;
}

.hide {
  display: none;
}

.show {

}
</style>