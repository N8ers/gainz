<template>
  <div>
    <br >
    <div>Signup</div>
    <form @submit.prevent="attemptSignup">
      <label>email:</label>
      <input type="text" v-model="userInput.email" />
      <label>username:</label>
      <input type="text" v-model="userInput.userName" />
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
        userName: null,
        password: null
      }
    }
  },
  methods: {
    attemptSignup: function () {
      if (
        this.userInput.email !== (null || '') 
        && this.userInput.userName !== (null || '') 
        && this.userInput.password !== (null || '')) {
        console.log('userInput: ', this.userInput)
        this.$store.dispatch('persons/attemptSignup', this.userInput)
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
