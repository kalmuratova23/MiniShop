<script setup>
import { useCartStore } from '../stores/Cart'

const cart = useCartStore()

const products = [
  { id: 1, name: 'Book', price: 2800 },
  { id: 2, name: 'Pen', price: 500 },
  { id: 3, name: 'Notebook', price: 950 }
]

const addToCart = (product) => {
  cart.addToCart(product)
}
</script>

<template>
  <div>
    <h2>Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }} т
        <button @click="addToCart(product)">Add</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
button {
  margin-left: 10px;
  padding: 4px 8px;
  background-color: teal;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: #006666;
}
</style>
