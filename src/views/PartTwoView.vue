<template>
  <div class="page">
    <h2>Part 2</h2>
    <div class="html-to-less">
      <div class="actions">
        <div>
          Html:
          <textarea name="" id="" v-model="htmlText" rows="10" cols="80"></textarea>
        </div>
        <div>
          Less:
          <textarea v-model="lessText" rows="10" cols="80" />
        </div>
      </div>

      <div class="preview">
        <div v-html="htmlText" />
        <span v-show="compilingStyle">Compiling style. Please wait...</span>
      </div>

      <component :is="'style'" scoped>
        {{ previewStyle }}
      </component>
    </div>
  </div>
</template>

<script setup>
import { render } from 'less'
import { ref, watch } from 'vue'

// Data
let timeOut
const htmlText = ref('')
const lessText = ref('')
const previewStyle = ref('')
const compilingStyle = ref(false)

// Watch
watch(lessText, (to) => {
  if (timeOut) clearTimeout(timeOut)
  compilingStyle.value = true

  timeOut = setTimeout(() => {
    render(to)
      .then((css) => {
        previewStyle.value = `.preview { ${css.css} }`
        compilingStyle.value = false
      })
      .catch((err) => {
        console.warn(err)
      })
  }, 1000)
})
</script>

<style scoped>
.page {
  & .html-to-less {
    display: flex;
    gap: 2rem;
    justify-content: center;

    & .actions {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    & .preview {
      width: 100%;
      padding: 0.5rem;
    }
  }
}
</style>
