Vue.component('static-list', {
	props: {
		listData: {
			type: Array,
			required: true
		}
	},
	data: () => ({

	}),
	computed: {
		mapList: function () {
			return this.listData;
		}
	},
	template: `
	<v-row>
		<v-col cols="12" class="text-center">
			<v-row v-for="(map, i) in mapList" :key="i">
				<v-col cols="12">{{ map.map_name }}</v-col>
			</v-row>
		</v-col>
	</v-row>
	`
})