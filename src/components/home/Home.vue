<template>
  <div>
    <h1>Welcome to gains-ville</h1>
    <Login />
    <Signup />
  </div>
</template>

<script>
import Login from "./Login.vue";
import Signup from "./Signup.vue";

export default {
  name: "Home",
  components: {
    Login,
    Signup
  },
  props: {},
  methods: {},
  created () {
    // this.$store.dispatch('persons/checkAuth')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
