<script>
export default {}
</script>

<template>
  <div class="container">
    <nav>
      <router-link to="/">🏠 Home</router-link>
      <router-link to="/cart">🧺 Cart</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}
a {
  text-decoration: none;
  font-weight: bold;
  color: black;
}
a.router-link-active {
  color: teal;
}
</style>
