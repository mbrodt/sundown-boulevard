<template>
  <button
    :type="type"
    @click="onClick"
    class="btn w-full flex items-center justify-center"
    :disabled="disabled"
  >
    <slot />
    <svg
      class="w-5 h-5 ml-4 text-white fill-current arrow-anim arrow-anim-right"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.4142 21.4142C36.1953 20.6332 36.1953 19.3668 35.4142 18.5858L22.6863 5.85787C21.9052 5.07682 20.6389 5.07682 19.8579 5.85787C19.0768 6.63891 19.0768 7.90524 19.8579 8.68629L31.1716 20L19.8579 31.3137C19.0768 32.0948 19.0768 33.3611 19.8579 34.1421C20.6389 34.9232 21.9052 34.9232 22.6863 34.1421L35.4142 21.4142ZM4 22L34 22L34 18L4 18L4 22Z"
      />
    </svg>
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
