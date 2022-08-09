<template>
  <nav>
    <router-link to="/">Options API</router-link> |
    <router-link to="/composition">Composition API</router-link>
  </nav>
  <router-view/>
</template>

<style>
html {
  background-color: black;
  min-height: 100vh;
  min-width: 100vw;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1685f8;
  min-height: 100vh;
  min-width: 100vw;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #1685f8;
}

nav a.router-link-exact-active {
  color: #f52789;
}
</style>
