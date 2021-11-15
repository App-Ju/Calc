<template>
  <div id="app" class="app">
    <calc-comp></calc-comp>
  </div>
</template>

<script>
import DisplayComp from '@/components/DisplayComp.vue';
import HistoryComp from '@/components/HistoryComp.vue';
import KeyBoard from '@/components/KeyBoard.vue';
import CalcComp from "@/components/CalcComp";

export default {
  components: {CalcComp, KeyBoard, DisplayComp, HistoryComp},
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

