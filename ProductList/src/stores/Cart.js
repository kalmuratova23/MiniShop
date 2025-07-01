import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((sum, item) => sum + item.price, 0)
    }
  },
  actions: {
    addToCart(product) {
      this.items.push(product)
      this.saveCart()
    },
    removeFromCart(index) {
      this.items.splice(index, 1)
      this.saveCart()
    },
    clearCart() {
      this.items = []
      localStorage.removeItem('cartItems')
    },
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
    loadCart() {
      const data = localStorage.getItem('cartItems')
      if (data) {
        this.items = JSON.parse(data)
      }
    }
  }
})
