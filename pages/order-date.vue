<template>
  <div>
    <h1>Pick order date and amount of people</h1>
    <div class="flex">
      <div class="w-1/2">
        <VueCtkDateTimePicker
          :no-keyboard="true"
          inline
          no-weekends-days
          :min-date="today"
          color="#BA2329"
          :disabled-hours="disabledHours"
          v-model="selectedDateTime"
        />
      </div>
      <div class="w-1/2 ml-16 flex flex-col justify-center items-center">
        <h2 class="text-center mb-4">Select amount of people</h2>
        <div class="flex items-center">
          <button @click="decrementAmount">
            <img
              class="w-24 h-24 transform rotate-180"
              src="~assets/images/arrow.svg"
              alt=""
            />
          </button>
          <span class="mx-8 text-6xl text-primary">{{
            $store.state.order.amountOfPeople
          }}</span>
          <button @click="incrementAmount">
            <img class="w-24 h-24" src="~assets/images/arrow.svg" alt="" />
          </button>
        </div>
        <div>
          <form
            @submit.prevent="onSubmit"
            class="mt-5 sm:mt-8 max-w-xl xl:max-w-2xl"
          >
            <input
              class="shadow-lg block w-64 rounded-lg text-black bg-gray-100 px-6 py-4"
              placeholder="Enter your email"
              v-model="email"
              required
              type="email"
            />
            <div class="mt-8 w-64">
              <LinkButton type="submit">Let's book it!</LinkButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
export default {
  components: {
    VueCtkDateTimePicker,
  },
  data() {
    return {
      email: this.$store.state.order.email ? this.$store.state.order.email : '',
      // If the time exists in the store (like if we go back to drinks and forward again), use that. Otherwise, set the current time as base
      selectedDateTime: this.$store.state.order.time,
      // this.$store.state.order.time
      //   ? this.$store.state.order.time
      //   : new Date().toISOString(),
      amountOfPeople: 1,
      disabledHours: [
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '23',
        '24',
      ],
    }
  },
  computed: {
    today() {
      return new Date().toISOString()
    },
  },

  methods: {
    decrementAmount() {
      this.$store.commit('order/decrementAmount')
    },
    incrementAmount() {
      this.$store.commit('order/incrementAmount')
    },
    onSubmit() {
      this.$store.commit('order/addEmail', this.email)
      this.$store.commit('order/addTime', this.selectedDateTime)

      this.$router.push({
        path: '/receipt',
      })
    },
  },
}
</script>
