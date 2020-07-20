<template>
  <div>
    <DatePicker
      mode="single"
      v-model="date"
      @input="dateChanged"
      color="teal"
      is-inline
      :attributes="attributes"
    />
  </div>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import moment from 'moment'

export default {
  components: {
    DatePicker
  },
  data() {
    return {
      date: moment(),
      attributes: [
      {
        key: 'today',
        highlight: true,
        dates: new Date()
      }
    ]
    }
  },
  methods: {
    dateChanged: function () {
      this.$emit('dateChanged', this.date)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  margin: 0 auto;
}
</style>