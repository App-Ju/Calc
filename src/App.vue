<template>
  <div id="app" class="app">
    <calc-comp/>
  </div>
</template>

<script>
import CalcComp from "@/components/CalcComp.vue";

export default {
  components: {
    CalcComp
  },
}
</script>

<style>
.app {
  display: inline-flex;
  box-sizing: border-box;
  font-size: 1.1rem;
  font-family: "Helvetica Neue", Calibri, sans-serif;
}
</style>

