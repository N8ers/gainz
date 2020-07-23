<template>
  <div>
    <br>
    <div>Login</div>
    <form @submit.prevent="attemptLogin">
      <label>email:</label>
      <input type="text" v-model="userInput.email" />
      <label>password:</label>
      <input type="password" v-model="userInput.password" />
      <button>login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    attemptLogin: function () {
      if (this.userInput.email !== (null || '') && this.userInput.password !== (null || '')) {
        this.$store.dispatch('persons/attemptLogin', this.userInput)
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
