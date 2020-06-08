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
			var data = _.sortBy(this.listData, 'map_name');
			return data;
		}
	},
	template: `
	<v-row>
		<v-col cols="12" class="text-center">
			<v-row v-for="(map, i) in mapList" :key="i">
				<v-col cols="12"><a :href="map.map_url">{{ map.map_name }}</a></v-col>
			</v-row>
		</v-col>
	</v-row>
	`
})