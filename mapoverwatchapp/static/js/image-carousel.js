var imagecarousel = Vue.component('image-carousel', {
	data: () => ({

	}),
	computed: {
		images: function () {
			return global_images || [];
		}
	},
	methods: {

	},
	template: `
	<v-carousel continuous mandatory hide-delimiters hide-delimiter-background show-arrows show-arrows-on-hover>
		<v-carousel-item v-for="(image, index) in images" :key="index" :href="image.href">
		</v-carousel-item>
	</v-carousel>
	`
});