<script setup>
import { useLangStore } from '../stores/lang'
import { useRouter } from 'vue-router'

const lang = useLangStore()
const router = useRouter()

const goToShop = () => router.push('/shop')
const goToCart = () => router.push('/cart')
</script>

<template>
  <div class="home-container">
    <h1>🛒 {{ lang.t('welcome') }}</h1>

    <p>Welcome to our store! Enjoy shopping.</p>

    <div class="buttons">
      <button @click="router.push('/')">🏠 Home</button>
      <button @click="goToShop">🛍️ {{ lang.t('shop') }}</button>
      <button @click="goToCart">🧺 {{ lang.t('cart') }}</button>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 600px;
  margin: 80px auto;
  text-align: center;
  font-family: sans-serif;
}
.buttons {
  margin-top: 30px;
}
button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>
