Vue.component('image-carousel', {
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
	<v-row align="center" justify="center">
		<v-col class="text-center">
			<v-carousel continuous mandatory hide-delimiter-background show-arrows show-arrows-on-hover height="75%">
				<v-carousel-item v-for="(image, index) in images" :key="index">
					<img :src="image.url"></img>
				</v-carousel-item>
			</v-carousel>
		</v-col>
	</v-row>
	`
});