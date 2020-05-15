<template>
  <div class="container mx-auto p-6 lg:px-0 xl:px-10 bg-rivalryDark">
    <div class="flex justify-center mb-6">
      <div class="flex-shrink-0">
        <img
          src="../assets/images/logo.svg"
          alt="rivalry logo"
          class="w-full h-16"
        />
      </div>
    </div>

    <div class="lg:flex">
      <div
        class="lg:flex-initial w-full grid grid-cols-3 gap-4"
        :class="slips ? 'w-full lg:w-9/12' : 'w-full'"
      >
        <div
          v-for="match in matches"
          :key="match.id"
          class="col-span-3"
          :class="{ 'mr-4': slips }"
        >
          <Match :match-data="match" :slip-showing="slips"></Match>
        </div>
      </div>
      <transition name="slide">
        <div v-if="slips" class="lg:flex-initial lg:w-3/12 w-full">
          <BetSlip />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Match from '~/components/Match'
import BetSlip from '~/components/BetSlip'

export default {
  components: {
    Match,
    BetSlip
  },
  async fetch({ store }) {
    await store.dispatch('GET_MATCH_DATA')
  },
  computed: {
    ...mapState({
      matches: (state) => {
        return state.matches
      },
      betSlip: (state) => {
        return state.betSlip
      }
    }),
    slips() {
      return this.betSlip.length > 0
    }
  }
}
</script>

<style scoped>
.slide-enter-active {
  transition: all 1s ease;
}
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-10%);
}
</style>
