<template>
  <div
    class="min-w-full mx-auto bg-white rounded shadow lg:grid lg:grid-cols-12 lg:gap-2 lg:grid-flow-row lg:h-12 content-center match-container"
    :class="{
      'bg-redLight border-t-2 border-redMedium hover:border-red live': live
    }"
    @click="addBetSlip"
  >
    <div
      class="lg:col-span-2 xl:col-span-1 inline-flex items-center justify-center"
      :class="{
        'rounded-full mx-1 my-2 py-1 px-1 bg-red uppercase tracking-wide text-white text-sm': live
      }"
    >
      <div class="px-2 lg:px-0 flex flex-no-wrap content-center justify-center">
        <span v-if="live">
          <LiveCircle />
        </span>
        {{ formatStatus(matchData.status) }}
      </div>
    </div>
    <div
      class="lg:col-span-2 xl:col-span-3 inline-flex items-center justify-center"
    >
      <h4 class="text-sm text-rivalryDark italic">
        {{ $moment(matchData.scheduled_at).format('llll') }}
      </h4>
    </div>
    <div class="col-span-8 inline-flex items-center">
      <div class="grid grid-cols-12 gap-1 w-full text-center">
        <div class="col-span-5">
          <button
            class="bg-transparent font-semibold py-2 px-4 lg:px-2 xl:px-6 text-rivalryDark hover:text-rivalryTeal competitor-button"
            @click.stop="addBetSlip(outcomes[0])"
          >
            {{ outcomes[0].competitor.name }} ({{ outcomes[0].odds }})
          </button>
        </div>
        <div class="col-span-1 inline-flex items-center">
          <h2>vs</h2>
        </div>
        <div class="col-span-5">
          <button
            class="bg-transparent font-semibold py-2 px-4 lg:px-2 xl:px-6 text-rivalryDark hover:text-rivalryTeal competitor-button"
            @click.stop="addBetSlip(outcomes[1])"
          >
            {{ outcomes[1].competitor.name }} ({{ outcomes[1].odds }})
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LiveCircle from '~/components/LiveCircle'

export default {
  components: {
    LiveCircle
  },
  props: {
    matchData: {
      type: Object,
      required: true
    }
  },
  computed: {
    live() {
      return this.matchData.status === 'live'
    },
    outcomes() {
      return this.matchData.default_market.outcomes
    }
  },
  methods: {
    formatStatus(status) {
      if (status === 'not_started') return 'Starts'

      return status
    },
    addBetSlip(outcome) {
      const slipOutcome = {
        outcomeId: outcome.id,
        match: outcome,
        scheduled_at: this.matchData.scheduled_at,
        status: this.matchData.status
      }
      this.$store.dispatch('SET_BET_SLIP', slipOutcome)
    }
  }
}
</script>

<style scoped>
.match-container:hover {
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0) scale(1.01);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0), 0px 0px 10px rgba(255, 255, 255, 1);
  position: relative;
  overflow: hidden;
}
.match-container:before {
  content: '';
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  top: 0;
  height: 4px;
  background: #f6be23;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}

.live.match-container:before {
  background: #ff4647;
  height: 2px;
}

.match-container:hover:before,
.match-container:focus:before,
.match-container:active:before {
  right: 0;
}

.competitor-button:hover {
  text-shadow: 1px 1px 2px rgba(14, 20, 46, 0.35);
}

.competitor-button:focus {
  outline: none;
}
</style>
