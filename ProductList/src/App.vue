<script setup>
import { useLangStore } from '@/stores/lang'
import { useDarkMode } from '@/composables/useDarkMode'
import { useWindowWidth } from '@/composables/useWindowWidth'

const lang = useLangStore()
const { dark, toggle } = useDarkMode()
const width = useWindowWidth()
</script>

<template>
  <nav>
    <router-link to="/">🏠 {{ lang.t('Home') }}</router-link>
    <router-link to="/cart">🛒 {{ lang.t('cart') }}</router-link>
    <button @click="toggle">{{ dark ? '☀️' : '🌙' }}</button>
    <button @click="lang.toggleLang">{{ lang.currentLang.toUpperCase() }}</button>
  </nav>

  <p v-if="width < 600"> Phone size </p>

  <router-view />
</template>

<style>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 20px;  
}

nav a {
  text-decoration: none;
  color: inherit;
}

body.dark-theme {
  background-color: #121212;
  color: white;
}
</style>
