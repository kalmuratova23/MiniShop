<script setup>
import { useCartStore } from '@/stores/Cart'

const cart = useCartStore()
cart.loadCart()

const removeItem = (index) => {
  cart.removeFromCart(index)
}
</script>

<template>
  <div class="container">
    <h1>My Cart</h1>
    <ul v-if="cart.items.length > 0">
      <li v-for="(item, index) in cart.items" :key="index">
        {{ item.name }} - {{ item.price }} т
        <button @click="removeItem(index)">Remove</button>
      </li>
    </ul>
    <p v-else>Cart is empty</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
}
li {
  margin-bottom: 10px;
}
button {
  margin-left: 10px;
  background: none;
  border: none;
  color: red;
  cursor: pointer;
}
</style>
