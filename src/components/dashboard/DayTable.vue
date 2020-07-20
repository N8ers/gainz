<template>
  <div>
    <table>
      <thead>
        <th></th>
        <th>food</th>
        <th>servings</th>
        <th>calories</th>
        <th>protein</th>
        <th></th>
      </thead>
      <draggable v-model="consumedList" :tag="'tbody'">
        <tr v-for="(food) in consumed" :key="`${food.id}`">
          <td class="draggable">=x=</td>
          <td class="draggable">{{ food.name }}</td>
          <td class="draggable">{{ food.servings }}</td>
          <td class="draggable">{{ food.calories * food.servings }}</td>
          <td class="draggable">{{ food.protein * food.servings }}</td>
          <td class="draggable"><button @click="removeFood(food)">X</button></td>
        </tr>
      </draggable>
      <tfoot>
        <td></td>
        <th>Total</th>
        <th></th>
        <th>{{ totalCalories }}</th>
        <th>{{ totalProtein }}</th>
        <th></th>
      </tfoot>
    </table>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "DayTable",
  components: {
    draggable
  },
  data() {
    return {};
  },
  props: ["consumed"],
  methods: {
    removeFood: function(food) {
      this.$emit('removeFood', food)
    }
  },
  computed: {
    consumedList: {
      get() {
        return this.consumed
      },
      set(newOrder) {
        this.$store.commit('consumed/SET_CONSUMED', newOrder)
      }
    },
    totalCalories: function() {
      if (this.consumed) {
        let total = 0;
        this.consumed.forEach(food => {
          total = total + food.calories;
        });
        return total;
      }
      return 0;
    },
    totalProtein: function() {
      if (this.consumed) {
        let total = 0;
        this.consumed.forEach(food => {
          total = total + food.protein;
        });
        return total + 'g';
      }
      return 0;
    }
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

.draggable {
    cursor: move;
    cursor: grab;
}

.draggable:active {
    cursor: grabbing;
}
</style>
