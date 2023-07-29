<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">Li WenKai</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal">
        <li v-for="link in navLinks" :key="link.path">
          <a>
            <SvgIcon :icon-class="link.icon" size="1.5em" />
          </a>
        </li>
        <li>
          <label class="swap">
            <input type="checkbox" @click="toggleDark" />
            <SvgIcon class="swap-on" icon-class="moon" size="1.5em" />
            <SvgIcon class="swap-off" icon-class="sun" size="1.5em" />
          </label>
        </li>
      </ul>
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
