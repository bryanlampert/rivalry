<template>
  <div
    class="mx-auto mt-6 lg:mt-0 lg:mx-0 lg:sticky lg:top-0 rounded overflow-y-scroll shadow-lg bg-white mx-1 text-center divide-y divide-rivalryMedium"
  >
    <h1 class="font-black text-xl my-2 text-rivalryOrangeRed">
      Bet {{ outcomes.length > 1 ? 'slips' : 'slip' }}
    </h1>
    <Outcome
      v-for="outcome in outcomes"
      :key="outcome.outcomeId"
      :outcome-data="outcome"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Outcome from '~/components/Outcome'

export default {
  components: {
    Outcome
  },
  computed: {
    ...mapState({
      outcomes: (state) => {
        return state.betSlip
      }
    })
  }
}
</script>

<style></style>
