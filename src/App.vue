<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Главная</router-link>
      <router-link to="/history">История</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('nextImage')
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul > li {
  list-style: none;
}
button:active, button:focus {
  outline: none;
}
button::-moz-focus-inner {
  border: 0;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  max-width: 866px;
  padding-top: 30px;
  margin: 0 auto;
}

#app .main {
  display: flex;
  border: 1px solid #707070;
  padding: 65px 30px;
  color: #707070;
}

#nav {
  padding: 20px 30px;
  margin-bottom: 40px;
  border: 1px solid #707070;
  font-size: 22px;
}

#nav a {
  color: #707070;
  text-decoration: none;
  margin-right: 30px;
}

#nav a:last-child {
  margin-right: 0;
}

#nav a:hover,
#nav a.router-link-exact-active {
  color: #000;
}
@media screen and (max-width: 900px) {
  #app {
    width: 100%;
    padding: 10px;
  }
}
@media screen and (max-width: 768px) {
#app .main {
    flex-direction: column;
    padding: 30px 10px;
  }
}
</style>
