<script setup>
import { useCartStore } from '@/stores/cart'
import { useTimer } from '@/composables/useTimer'


const cart = useCartStore()
cart.loadCart()

const { time, start, stop, reset} = useTimer()


const removeItem = (index) => {
  cart.removeFromCart(index)
}
const checkout = () => {
  alert('Order Accepted. Thank you!')
  cart.clearCart()
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

    <div v-if="cart.items.length > 0" class="summary">
      <p>Summary: <strong>{{ cart.totalPrice }} т</strong></p>
      <button @click="checkout">Go to checkout</button>
    </div>
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
.summary {
  margin-top: 20px;
}
.summary button {
  padding: 10px 20px;
  background-color: teal;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
</style>
