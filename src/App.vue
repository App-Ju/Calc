<template>
  <div class="app">
    <label>
      <input type="number">
    </label>
    <div id="keyboard">
      <div class="line">
        <button data-ac="true">AC</button>
        <button data-change="true">+/-</button>
        <button data-percent="true">%</button>
        <button data-divide="true">/</button>
      </div>
      <div class="line">
        <button data-num="true">7</button>
        <button data-num="true">8</button>
        <button data-num="true">9</button>
        <button data-multiply="true">*</button>
      </div>
      <div class="line">
        <button data-num="true">4</button>
        <button data-num="true">5</button>
        <button data-num="true">6</button>
        <button data-minus="true">-</button>
      </div>
      <div class="line">
        <button data-num="true">1</button>
        <button data-num="true">2</button>
        <button data-num="true">3</button>
        <button data-plus="true">+</button>
      </div>
      <div class="line">
        <button data-del="true">&lt;</button>
        <button data-num="true">0</button>
        <button data-comma="true">,</button>
        <button data-equals="true">=</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style src="./app.css"></style>
