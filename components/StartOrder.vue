<template>
  <div class="px-12 py-8 flex flex-col h-full justify-around text-center">
    <h2>Start your order here</h2>
    <p>
      Sundown Boulevard is ready to welcome you with our amazing dishes and
      fabulous drinks. Create your order in just a few short steps!
    </p>
    <LinkButton @click="startOrder" target="/pick-dish">Let's go</LinkButton>
  </div>
</template>

<script>
export default {
  methods: {
    startOrder() {
      this.$router.push({
        path: '/pick-dish',
      })
    },
  },
}
</script>
