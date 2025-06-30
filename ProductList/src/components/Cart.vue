<script setup>
import { useCartStore } from '@/stores/Cart';

const cart = useCartStore()
cart.loadCart()

const removeItem = (index) => {
    cart.removeFromCart(index)
}


</script>

<template>
    <div>
        <h2> Your Cart </h2>
        <ul>
            <li v-for="(item,index) in cart.items" :key="index">
                {{ item.name }} - {{ item.price }} т
                <button @click="removeItem(index)"> Remove </button>
            </li>
        </ul>
        <p v-if="cart.items.length === 0"> Cart is empty </p>

    </div>
</template>

<style scoped>
ul{
    list-style: none;
    padding: 0;
}
li{
    margin-bottom: 8px;
}
button{
    margin-left: 10px;
    background: none;
    border: none;
    color: red;
    font-size: 18px;
    cursor: pointer;
}
</style>