<template>
  <div class="p-24 flex flex-col justify-center h-full">
    <h2 class="mb-4">Find your order</h2>
    <p>
      If you've previously added an order, write your email below and we'll find
      it for you ✌
    </p>

    <form
      @submit.prevent="findOrder"
      class="mt-5 sm:mt-8 sm:flex max-w-xl xl:max-w-2xl"
    >
      <input
        class="shadow-lg block w-full rounded-lg rounded-r-none text-black bg-gray-100 flex-1 px-6 py-4"
        placeholder="Enter your email"
        v-model="email"
        required=""
        type="email"
      />
      <button class="btn w-32 px-4 py-4 leading-6 rounded-l-none" type="submit">
        Find
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    findOrder() {
      const storedOrder = localStorage.getItem(this.email)
      if (storedOrder) {
        this.$store.commit('order/loadOrder', storedOrder)
        this.$router.push({
          path: '/pick-dish',
          query: {
            updating: true,
          },
        })
      }
    },
  },
}
</script>
