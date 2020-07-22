<template>
  <div>
    <h1>Dashboard</h1>
    <ErrorMessage v-if="error" :message="errorMessage" />

    <div>
      <label>Go to a Specific Date: </label>
      <span class="calendar-cursor" @click="toggleCalendarVisibility">make me a pick of a calendar</span>
    </div>
    <Calendar v-if="showCalendar" @dateChanged="dateChanged" />

    <br>

    <FoodCatalogTable
      :consumed="consumed"
      v-if="showAddFoodTable" 
      @addFoodError="addFoodError" 
      @addFoodSuccess="addFoodSuccess" 
      :date="selectedDate"
    />

    <button @click="addFoodToggle">{{ addFoodToggleStatus }}</button>
    <DayTable :consumed="consumed" @removeFood="removeFood" />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

import DayTable from "./DayTable";
import FoodCatalogTable from "./FoodCatalogTable"
import ErrorMessage from "../helpers/ErrorMessage"
import Calendar from '../helpers/Calendar'

let defaultToToday = moment().format('YYYY-MM-DD')

export default {
  name: "Dashboard",
  components: {
    DayTable,
    FoodCatalogTable,
    ErrorMessage,
    Calendar
  },
  data() {
    return {
      showAddFoodTable: false,
      showCalendar: false,
      error: false,
      errorMessage: null,
      selectedDate: defaultToToday
    };
  },
  methods: {
    removeFood: function(foodToRemove) {
      this.removeErrorMessage()

      this.$store.dispatch('consumed/removeFood', foodToRemove)
      .then(() => this.getDaysData())
      .catch((error) => {
        this.error = true
        this.errorMessage = error
      })
    },
    addFoodToggle: function() {
      this.showAddFoodTable = !this.showAddFoodTable
    },
    getDaysData: function () {
      this.removeErrorMessage()
      this.$store.dispatch('consumed/getFoods', this.selectedDate)
      .catch((error) => {
        this.error = true
        this.errorMessage = error
      })
    },
    addFoodError: function (error) {
      this.error = true
      this.errorMessage = error
    },
    removeErrorMessage: function () {
      this.error = false
      this.errorMessage = null
    },
    addFoodSuccess: function () {
      this.getDaysData()
    },
    toggleCalendarVisibility: function () {
      this.showCalendar = !this.showCalendar
    },
    dateChanged: function (date) {
      this.selectedDate = moment(date).format('YYYY-MM-DD')
      this.getDaysData()
    }
  },
    computed: {
    ...mapState('consumed', ['consumed']),
    ...mapState('persons', ['user']),
    addFoodToggleStatus: function () {
      return (this.showAddFoodTable ? 'hide food table' : 'Add Food')
    }
  },
  watch: {
    consumed (newFoods) {
      // if (!this.user.id || !this.user.email) {
      //   alert('gotta sign in')
      //   return
      // }
      for (let i = 0; i < newFoods.length; i++) {
        if (newFoods[i].consumed_at != i) {
          let payload = {foods: newFoods}
          this.$store.dispatch('consumed/restructureConsumedAt', payload)
          return;
        }
      }
    }
  },
  created: function () {
    this.getDaysData()
  }
};
</script>

<style lang="scss" scoped>
.calendar-cursor {
  cursor: pointer;
}
</style>
