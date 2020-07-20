<template>
  <div>
    <h1>Food Database</h1>
    <ErrorMessage v-if="error" :message="errorMessage" />
    <Table :foods="foods" @removeFood="removeFood" @addFoodToDB="addFoodToDB" />
  </div>
</template>

<script>
import {mapState} from 'vuex'

import Table from "./Table";
import ErrorMessage from "../helpers/ErrorMessage";

export default {
  name: "FoodDatabase",
  components: {
    Table,
    ErrorMessage
  },
  data() {
    return {
      error: false,
      errorMessage: null
    };
  },
  methods: {
    removeFood: async function(id) {
      this.$store.dispatch('food/removeFood', id)
      .then(() => this.getFoods())
      .catch((error) => {
        this.error = true
        this.errorMessage = error
      })
    },
    addFoodToDB: async function(newFood) {
      this.$store.dispatch('food/addFood', newFood)
      .then(() => {
        this.getFoods()
      })
      .catch((error) => {
        this.error = true
        this.errorMessage = error
      })
    },
    getFoods: function() {
      this.$store.dispatch('food/getFoods')
    }
  },
  computed: {
    ...mapState('food', ['foods'])
  },
  props: {},
  created: function () {
    this.getFoods()
  }
};
</script>

<style lang="scss" scoped></style>
