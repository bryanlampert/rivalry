<template>
  <div class="py-2 text-center grid grid-cols-6 gap-2" :class="{ live: live }">
    <div
      v-if="live"
      class="w-1/2 col-span-3 rounded-full mx-4 my-2 py-1 bg-red uppercase tracking-wide text-white text-sm"
    >
      <div class="flex flex-no-wrap content-center justify-center">
        <span v-if="live">
          <LiveCircle />
        </span>
        live
      </div>
    </div>
    <div
      class="col-span-1 col-start-6 inline-flex items-center"
      :class="live ? 'w-1/2' : 'w-full'"
    >
      <button
        class="rivlaryDark float-right mx-2 remove-outcome-button"
        @click.stop="removeSlip"
      >
        <svg style="width:16px; height:16px" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z"
          />
        </svg>
      </button>
    </div>
    <div class="col-span-6 text-center">
      <h1 class="text-rivalryDark font-bold">
        {{ outcomeData.match.competitor.name }}
        @
        <span class="text-rivalryTeal font-2xl">
          {{ outcomeData.match.odds }}
        </span>
      </h1>
    </div>
    <div class="col-span-6 text-center mb-2 px-4">
      <p class="text-rivalryMedium">
        {{ live ? 'Started' : 'Starts' }}:
        {{ $moment(outcomeData.scheduled_at).format('llll') }}
      </p>
    </div>
  </div>
</template>

<script>
import LiveCircle from '~/components/LiveCircle'

export default {
  components: { LiveCircle },
  props: {
    outcomeData: {
      type: Object,
      required: true
    }
  },
  computed: {
    live() {
      return this.outcomeData.status === 'live'
    }
  },
  methods: {
    removeSlip() {
      this.$store.dispatch('DEL_BET_SLIP', this.outcomeData)
    }
  }
}
</script>

<style scoped>
.remove-outcome-button:focus {
  outline: none;
}
.live {
  -webkit-box-shadow: inset 0px 0px 0px 1px #ff4647,
    inset 0px 0px 0px 3px #ff9394, inset 0px 0px 0px 5px #ffdfe0;
  -moz-box-shadow: inset 0px 0px 0px 1px #ff4647, inset 0px 0px 0px 3px #ff9394,
    inset 0px 0px 0px 5px #ffdfe0;
  box-shadow: inset 0px 0px 0px 1px #ff4647, inset 0px 0px 0px 3px #ff9394,
    inset 0px 0px 0px 5px #ffdfe0;
}
</style>
