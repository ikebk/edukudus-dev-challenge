<template>
  <div class="events">
    <div>
      <p>Child:</p>
      <p>bool: {{ boolVal }}</p>
      <p>Text: {{ strVal }}</p>
    </div>
    <hr />

    <div class="actions">
      <div>
        <button @click="btnClick">Change bool</button>
      </div>
      <div>
        <input type="text" name="str" v-model="strVal" placeholder="Type text here" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'
const emit = defineEmits(['onTextChange', 'onBtnClick'])

// Data
const boolVal = ref(false)
const strVal = ref('')

// Methods
const btnClick = () => {
  boolVal.value = !boolVal.value
  emit('onBtnClick', boolVal.value)
}

// Watch
watch(strVal, (to) => {
  emit('onTextChange', to)
})
</script>

<style scoped>
.events {
  padding: 2rem;
  background-color: lightgrey;
}

.actions {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-top: 1rem;

  & button {
    background-color: cornflowerblue;
    color: #fff;
    border-color: cornflowerblue;
  }

  & input,
  & button {
    padding: 0.5rem;
  }
}
</style>
