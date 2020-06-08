Vue.component('collapsible-list', {
	props: {
		listData: {
			type: Object,
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
		<v-col cols="12">
			<v-expansion-panels multiple hover accordion>
				<v-expansion-panel v-for="(maps, map_type) in mapList" :key="map_type">
					<v-expansion-panel-header>{{ map_type }}</v-expansion-panel-header>
					<v-expansion-panel-content>
						<static-list :listData="maps"></static-list>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-col>
	</v-row>
	`
})