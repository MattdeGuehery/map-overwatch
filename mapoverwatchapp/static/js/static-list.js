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
	methods: {
		redirectToUrl: function (url) {
			window.location = url;
		}
	},
	template: `
	<v-row>
		<v-col cols="12" class="text-center">
			<v-list>
				<v-list-item-group>
					<v-list-item v-for="(map, i) in mapList" :key="i">
						<v-list-item-content @click="redirectToUrl(map.map_url)">
							<a :href="map.map_url">{{ map.map_name }}</a>
						</v-list-item-content>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-col>
	</v-row>
	`
})