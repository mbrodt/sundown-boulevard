<template>
  <div>
    <h1>Order confirmed!</h1>
    <div class="bg-white p-8 w-full max-w-2xl mx-auto rounded-lg shadow-2xl">
      <p class="text-lg text-center">
        Congratulations! Your order has been confirmed. We look forward to
        serving you at
        <span class="text-primary font-bold">{{ formatDate(time) }}</span
        >. We've registered
        <span class="text-primary font-bold">{{ amountOfPeople }}</span> people,
        and <span class="text-primary font-bold">{{ email }}</span> as your
        contact address
      </p>
      <div class="flex mt-8">
        <div class="w-1/2 text-center">
          <p
            class="text-gray-500 uppercase tracking-wider font-bold text-sm mb-2"
          >
            Dish
          </p>
          <div class="">
            <img
              :src="dish.image"
              alt="The dish"
              class="mx-auto w-32 h-32 rounded-lg"
            />
            <p>{{ dish.name }}</p>
          </div>
        </div>

        <div class="w-1/2 text-center">
          <p
            class="text-gray-500 uppercase tracking-wider font-bold text-sm mb-2"
          >
            Drinks
          </p>
          <div class="grid grid-cols-2 gap-8">
            <div
              class="flex flex-col items-center"
              v-for="drink in drinks"
              :key="drink.id"
            >
              <img class="h-32" :src="drink.image" alt="Drink" />
              <p>{{ drink.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-8 max-w-xs mx-auto">
      <LinkButton @click="resetFlow">Make another order</LinkButton>
    </div>
  </div>
</template>

<script>
import confetti from 'canvas-confetti'
import { mapState } from 'vuex'
export default {
  computed: mapState({
    dish: (state) => state.order.dish,
    drinks: (state) => state.order.drinks,
    time: (state) => state.order.time,
    email: (state) => state.order.email,
    amountOfPeople: (state) => state.order.amountOfPeople,
  }),
  methods: {
    formatDate(time) {
      const date = new Date(time)
      const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      }
      const formatted = new Intl.DateTimeFormat('en-US', options).format(date)
      return formatted
    },
    resetFlow() {
      this.$router.push({
        path: '/',
      })
      this.$store.commit('order/resetOrder')
    },
  },
  mounted() {
    const {
      dish,
      drinks,
      time,
      email,
      amountOfPeople,
    } = this.$store.state.order
    // if (!dish || drinks.length === 0 || !time || !email || !amountOfPeople) {
    //   return this.$router.push('/')
    // }
    this.$store.commit('order/saveOrder')
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.5 },
    })
  },
}
</script>
