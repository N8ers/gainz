<template>
  <div>
    Whoopsie: {{ message }}
  </div>
</template>

<script>
  export default {
    props: [
      'message'
    ],
  }
</script>

<style lang="scss" scoped>
div { 
  background-color: red;
  color: white;
}
</style>