<template>
  <div>
    <table>
      <tr>
        <th>food</th>
        <th>calories</th>
        <th>protein</th>
        <th><button @click="toggleNewFoodRow">+ a food</button></th>
      </tr>
      <tr v-if="addNewFoodRowVisibile">
        <td><input type="text" v-model="newFood.name" /></td>
        <td><input type="text" v-model="newFood.calories" /></td>
        <td><input type="text" v-model="newFood.protein" /></td>
        <td><button @click="addNewFood">ADD!</button></td>
      </tr>
      <tr v-for="(food, index) in foods" :key="`${food.id}-${index}`">
        <td>{{ food.name }}</td>
        <td>{{ food.calories }}</td>
        <td>{{ food.protein }}</td>
        <td><button @click="removeFood(food)">X</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  components: {},
  data() {
    return {
      addNewFoodRowVisibile: false,
      newFood: {
        name: null,
        calories: null,
        protein: null
      }
    };
  },
  props: ["foods"],
  methods: {
    removeFood: function(food) {
      this.$emit('removeFood', food.id)
    },
    toggleNewFoodRow: function() {
      this.addNewFoodRowVisibile = !this.addNewFoodRowVisibile
    },
    addNewFood: function() {
      let newFood = this.newFood
      if (this.newFood.name && this.newFood.calories && this.newFood.protein) {
        this.$emit('addFoodToDB', newFood)
        this.newFood = {
          name: null,
          calories: null,
          protein: null
        }
      } else {
        alert('all fields needed!')
      }
    }
  },
  computed: {

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
