<template>
  <div>
    <Header />
    <main>
      <slot />
      <Footer />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>
