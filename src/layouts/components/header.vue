<template>
  <header>
    <label class="swap">
      <input type="checkbox" @click="toggleDark" />
      <div class="swap-on">ON</div>
      <div class="swap-off">OFF</div>
    </label>
  </header>
</template>

<script lang="ts" setup>
let isDark = ref<boolean>(false)
const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) document.documentElement.setAttribute('data-theme', 'dark')
  else document.documentElement.setAttribute('data-theme', 'light')
}
</script>
