<template>
  <div>
    <table>
      <tr>
        <th>add</th>
        <th>food</th>
        <th>calories</th>
        <th>protein</th>
      </tr>
      <tr v-for="food in foods" :key="`${food.id}`">
        <td>
          <button @click="addFood(food)">+</button>
          <input v-model="servings.parentId[food.id]" type="number" />
        </td>
        <td>{{ food.name }}</td>
        <td>{{ food.calories }}</td>
        <td>{{ food.protein }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AddFoodToDay",
  components: {},
  data() {
    return {
      servings: {
        parentId: []
      }
    }
  },
  props: [ 'date', 'consumed' ],
  methods: {
    addFood: function(payload) {

      if (!this.$store.state.user) {
        alert('you must be signed in')
        return
      }

      payload["servings"] = parseInt(this.servings.parentId[payload.id])
      payload["date"] = this.date
      payload["user_id"] = this.$store.state.user.id
      payload["sort_order"] = (this.consumed.length + 1)

      this.$store.dispatch('consumed/addFood', payload)
      .then(() => this.$emit('addFoodSuccess'))
      .catch((error) => this.$emit('addFoodError', error))
    },
    getFoods: function() {
      this.$store.dispatch('food/getFoods')
    }
  },
  computed: {
    foods: function () {
      return this.$store.state.food.foods;
    }
  },
  created: function () {
    this.getFoods()
  }
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;
  margin: 0 auto;
}

td,
th {
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
}
</style>