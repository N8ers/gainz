<template>
  <div>
    <h1>Welcome to gains-ville</h1>
    <!-- <button @click="changeUser({ id: 1, name: 'n8-dev' })"><h5>be n8-dev (id 1)</h5></button> -->
    <!-- <button @click="changeUser({ id: 2, name: 'n8-test' })"><h5>be n8-test (id 2)</h5></button> -->
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
  // methods: {
  //   changeUser: function (user) {
  //     this.$store.commit('SET_USER', user)
  //   }
  // }
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
