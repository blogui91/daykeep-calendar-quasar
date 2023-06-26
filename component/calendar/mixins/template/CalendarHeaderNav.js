const debug = require('debug')('calendar:CalendarHeaderNav')

export default {
  props: {
    timePeriodUnit: {
      type: String,
      default: 'days'
    },
    timePeriodAmount: {
      type: Number,
      default: 1
    },
    moveTimePeriodFunction: Object,
    moveTimePeriodEmit: {
      type: String,
      default: 'calendar:navMovePeriod'
    }
  },
  methods: {
    doMoveTimePeriod (timePeriodUnit, timePeriodAmount) {
      this.$emitValue(
        this.moveTimePeriodEmit,
        {
          unitType: timePeriodUnit,
          amount: timePeriodAmount
        }
      )
    }
  },
  mounted () {
    debug('Component mounted')
  }
}
