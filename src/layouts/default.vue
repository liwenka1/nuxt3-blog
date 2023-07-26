<template>
  <div>
    <h1>这里是一个layouts组件</h1>
    <main>
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Footer from './components/Footer.vue'
</script>
