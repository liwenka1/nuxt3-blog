<template>
  <header>
    <label class="swap">
      <input type="checkbox" @click="toggleDark" />
      <div class="swap-on">
        ON
        <SvgIcon icon-class="moon" />
      </div>
      <div class="swap-off">
        OFF
        <SvgIcon icon-class="sun" />
      </div>
    </label>
  </header>
</template>

<script setup lang="ts">
let isDark = ref<boolean>(false)
const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) document.documentElement.setAttribute('data-theme', 'dark')
  else document.documentElement.setAttribute('data-theme', 'light')
}
</script>
