<template>
	<carousel loop autoplay :autoplayTimeout=4000 paginationActiveColor="#BA2329" paginationColor="#EFEFEF"  paginationPosition="bottom-overlay" :perPage=1 class="h-full w-full">
		<slide class="w-full h-full">
			<img class="w-full h-full object-cover" src="https://www.rnz.co.nz/assets/news_crops/60885/eight_col_32917696_l.jpg?1531180823" alt="Food Slide">
		</slide>
		<slide class="w-full h-full">
			<img class="w-full h-full object-cover" src="https://prod-wolt-venue-images-cdn.wolt.com/5e9ed940634ff8fe31e88912/82bf3a34-83d5-11ea-b0a6-0a586469ca09_food_coma8_menu.jpg" alt="Food Slide">
		</slide>
		<slide class="w-full h-full">
			<img class="w-full h-full object-cover" src="https://i.ndtvimg.com/i/2016-06/chinese-625_625x350_81466064119.jpg" alt="Food Slide">
		</slide>
		<slide class="w-full h-full">
			<img class="w-full h-full object-cover" src="https://thumbs-prod.si-cdn.com/cAU0hdDob45w_75sItCT68WXbZQ=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c5/d1/c5d13e71-f316-4b68-ac23-99b6384f4792/istock-602301816.jpg" alt="Food Slide">
		</slide>
	</carousel>
</template>

<tem

<script>
import { Carousel, Slide } from 'vue-carousel';
	export default {
		components: {
				Carousel,
				Slide
		}
	}
</script>

