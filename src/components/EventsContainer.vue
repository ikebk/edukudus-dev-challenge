<template>
  <div class="events-container">
    <div>
      <p>Parent:</p>
      <p>bool: {{ boolVal }}</p>
      <p>Text: {{ strVal }}</p>
    </div>
    <hr />
    <Events @onBtnClick="btnClickHandler" @onTextChange="textChangeHandler" />
  </div>
</template>

<script setup>
import Events from '@/components/Events.vue'
import { ref } from 'vue'

// Data
const boolVal = ref(false)
const strVal = ref('')

// Methods
const btnClickHandler = (e) => {
  boolVal.value = e
}

const textChangeHandler = (e) => {
  strVal.value = e
}
</script>

<style scoped>
.events-container {
}
</style>
