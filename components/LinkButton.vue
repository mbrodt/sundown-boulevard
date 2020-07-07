<template>
  <button
    :type="type"
    @click="onClick"
    class="btn w-full"
    :class="{ 'bg-gray-800': disabled }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ['disabled', 'type'],
  methods: {
    onClick() {
      this.$emit('click')
    },
  },
}
</script>
