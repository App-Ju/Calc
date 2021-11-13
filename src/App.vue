<template>
  <div id="app">
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
* {
  box-sizing: border-box;
  font-size: 1.1rem;
}

#app {
  display: inline-flex;
}
</style>

