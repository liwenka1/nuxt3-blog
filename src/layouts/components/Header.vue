<template>
  <div
    class="navbar w-full relative overflow-hidden bg-top-center bg-cover bg-fixed bg-no-repeat"
    style="background-image: url("/assets/img/header.png")"
  >
    <div class="navbar-start">
      <span
        class="flex items-center h-full mx-1 cursor-pointer hover:text-pink-300"
        >Li WenKai</span
      >
    </div>
    <div class="navbar-end">
      <div
        v-for="item in navLinks"
        :key="item.path"
        class="flex items-center h-full mx-1 cursor-pointer hover:text-pink-300"
      >
        <SvgIcon :icon-class="item.icon" size="1.5em" class="md:hidden" />
        <span class="hidden md:inline align-middle">{{ item.title }}</span>
      </div>
      <div
        class="flex items-center h-full mx-1 cursor-pointer hover:text-pink-300"
      >
        <label class="swap">
          <input type="checkbox" @click="toggleDark" />
          <SvgIcon class="swap-on" icon-class="moon" size="1.5em" />
          <SvgIcon class="swap-off" icon-class="sun" size="1.5em" />
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { navLinks } from '@/site.config'

let isDark = ref<boolean>(false)
const toggleDark = () => {
  isDark.value = !isDark.value
  if (isDark.value) document.documentElement.setAttribute('data-theme', 'dark')
  else document.documentElement.setAttribute('data-theme', 'light')
}
</script>
