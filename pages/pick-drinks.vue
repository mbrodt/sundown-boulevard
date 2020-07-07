<template>
  <div>
    <h1>Pick your drinks</h1>
    <div class="flex items-start">
      <div
        class="bg-white w-2/3 rounded-lg shadow-2xl grid grid-cols-2 gap-16 px-8 py-16"
      >
        <div
          class="flex flex-col items-center relative py-8 rounded-lg transition-colors duration-150 ease"
          @click="toggleDrink(drink)"
          v-for="drink in drinks"
          :key="drink.name"
          :class="{ 'is-selected': isDrinkSelected(drink) }"
        >
          <img
            class="absolute top-0 right-0 pr-16 pt-8 opacity-0 transition-opacity duration-300 ease"
            :class="{ 'opacity-100': isDrinkSelected(drink) }"
            src="~assets/images/checkmark.svg"
            alt="Checkmark icon"
          />
          <img class="h-32" :src="drink.image" :alt="drink.id" />
          <h3 class="text-lg font-bold">{{ drink.name }}</h3>
          <p class="text-gray-600 uppercase text-sm tracking-wide">
            {{ drink.description }}
          </p>
        </div>
      </div>
      <div class="ml-8 w-1/3 h-64 bg-white rounded-lg shadow-2xl">
        <div class="px-12 py-8 flex flex-col h-full justify-around text-center">
          <h2>Next up: Pick date and amount</h2>

          <LinkButton
            :disabled="$store.state.order.drinks.length <= 0"
            @click="onClick"
            >When do you want it?</LinkButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drinks: [],
      // We don't currently use those, but it would be nice to indicate loading state and display potential errors to the user
      loading: true,
      error: null,
    }
  },
  methods: {
    async fetchDrinks() {
      this.loading = true
      await this.$axios
        .$get('https://api.punkapi.com/v2/beers')
        .then((result) => {
          this.drinks = result.map((beer) => {
            return {
              id: beer.id,
              name: beer.name,
              description: beer.tagline,
              image: beer.image_url,
            }
          })
          this.loading = false
        })
        .catch((err) => {
          this.error = err
        })
    },
    toggleDrink(clickedDrink) {
      this.$store.commit('order/toggleDrink', clickedDrink)
    },
    isDrinkSelected(drink) {
      const drinkIsSelected = this.$store.state.order.drinks.find(
        (aDrink) => aDrink.id === drink.id
      )
      return !!drinkIsSelected
    },
    onClick() {
      console.log('HELLO DONT CRASH')
      this.$router.push({
        path: '/order-date',
        query: {
          updating: this.$route.query.updating,
        },
      })
    },
  },

  mounted() {
    this.fetchDrinks()
  },
}
</script>

<style>
.is-selected {
  @apply bg-secondary bg-opacity-25;
}
</style>
