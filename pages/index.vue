<template>
  <div class="home-grid">
    <div class="col-start-1 col-span-8 shadow-2xl">
      <DishCarousel />
    </div>
    <div class="col-start-9 col-span-4 bg-white shadow-2xl rounded-lg">
      <StartOrder />
    </div>
    <div class="col-start-1 col-span-6 bg-white shadow-2xl rounded-lg">
      <FindOrder />
    </div>
    <div class="col-start-7 col-span-6 bg-white shadow-2xl rounded-lg">
      <ContentBox />
    </div>
  </div>
</template>

<script>
export default {
  transition: 'page',
}
</script>

<style>
.home-grid {
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 400px);
}
</style>
