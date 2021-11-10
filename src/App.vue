<template>
  <div class="app">
    <label>
      <input
          v-model='inputValue'
          type="number">
    </label>
    <div id="keyboard">
      <div class="line">
        <button >AC</button>
        <button >+/-</button>
        <button >%</button>
        <button >/</button>
      </div>
      <div class="line">
        <button @click="addNumber">7</button>
        <button @click="addNumber">8</button>
        <button @click="addNumber">9</button>
        <button >*</button>
      </div>
      <div class="line">
        <button @click="addNumber">4</button>
        <button @click="addNumber">5</button>
        <button @click="addNumber">6</button>
        <button >-</button>
      </div>
      <div class="line">
        <button @click="addNumber">1</button>
        <button @click="addNumber">2</button>
        <button @click="addNumber">3</button>
        <button >+</button>
      </div>
      <div class="line">
        <button data-del="true">&lt;</button>
        <button @click="addNumber">0</button>
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
      inputValue: ''
    }
  },
  methods: {
    addNumber (event) {
      this.inputValue += event.target.textContent
    }
  }
}
</script>

<style src="./app.css"></style>
