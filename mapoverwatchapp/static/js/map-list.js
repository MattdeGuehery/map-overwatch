Vue.component('map-list', {
	data: () => ({
		listType: false
	}),
	computed: {
		buttons: function () {
			var buttons = [];
			buttons.push({ text: 'Alphabetical', value: false, });
			buttons.push({ text: 'By Map Type', value: true, });
			return buttons;
		},
		mapList: function () {
			var data = _.sortBy(data, 'map_id');
			if (this.listType) {
				data = _.groupBy(data, 'map_type');
			}
			return this.listType ? (data || {}) : (data || []);
		}
	},
	template: `
	<v-row>
		<v-col cols="12">
			<v-row>
				<v-col offset="10" cols="2">
					<v-btn-toggle v-model="listType" mandatory>
						<v-btn v-for="(b,i) in buttons" :key="i" :value="b.value">{{ b.text }}</v-btn>
					</v-btn-toggle>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="12" class="text-center">
					<static-list v-if="!listType" :listData="mapList"></static-list>
					<collapsible-list v-if="listType" :listData="mapList"></collapsible-list>
				</v-col>
			</v-row>
		</v-col>
	</v-row>
	`
})