<template>
  <div class="page">
    <h2>Part 1</h2>
    <EventsContainer> </EventsContainer>
  </div>
</template>

<script setup>
import EventsContainer from '../components/EventsContainer.vue'
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
