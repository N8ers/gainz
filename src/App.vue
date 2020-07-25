<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/foodDatabase">Food Database</router-link> || 
      <button @click="logout">LOGOUT</button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      localStorage.clear()
      this.$store.commit('persons/CLEAR_USER')
      if (this.$router.currentRoute.name !== 'Home') {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.$store.dispatch('persons/checkAuth')
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
