<template>
  <div>
    <h1>Pick your dish</h1>
    <div class="flex items-start">
      <div class="bg-white w-2/3 rounded-lg shadow-2xl">
        <div class="relative" v-if="dish !== null">
          <img
            class="dish-image w-full object-cover rounded-b-lg"
            :src="dish.image"
            :alt="dish.name"
          />
          <div class="absolute top-0 right-0 p-4">
            <button @click.prevent="fetchDish" class="btn px-4">
              Generate new dish
            </button>
          </div>
          <div
            class="absolute bottom-0 rounded-b-lg text-white p-4 bg-secondary bg-opacity-75"
          >
            <h3 class="text-3xl font-bold text-white">{{ dish.name }}</h3>
            <p>{{ dish.instructions.slice(0, 200) }}...</p>
          </div>
        </div>
      </div>
      <div class="ml-8 w-1/3 h-64 bg-white rounded-lg shadow-2xl">
        <div class="px-12 py-8 flex flex-col h-full justify-around text-center">
          <h2>Next up: Let's pick some drinks!</h2>

          <LinkButton @click="onClick">I love beer</LinkButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dish: null,
      // We don't currently use those, but it would be nice to indicate loading state and display potential errors to the user
      loading: true,
      error: null,
    }
  },
  methods: {
    async fetchDish() {
      this.loading = true
      await this.$axios
        .$get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((result) => {
          // Create an object with more memorable key names
          this.dish = {
            id: result.meals[0].idMeal,
            name: result.meals[0].strMeal,
            image: result.meals[0].strMealThumb,
            instructions: result.meals[0].strInstructions,
          }
          this.loading = false
        })
        .catch((err) => {
          this.error = err
        })
    },
    onClick() {
      this.$store.commit('order/addDish', this.dish)
      this.$router.push({
        path: '/pick-drinks',
        query: {
          updating: this.$route.query.updating,
        },
      })
    },
  },
  mounted() {
    if (this.$route.query.updating) {
      this.dish = this.$store.state.order.dish
    } else {
      this.fetchDish()
    }
  },
}
</script>

<style scoped>
.dish-image {
  height: 500px;
}
</style>
