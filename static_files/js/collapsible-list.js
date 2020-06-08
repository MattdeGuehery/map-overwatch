Vue.component('collapsible-list', {
	props: {
		listData: {
			type: 'Array',
			required: true
		}
	},
	data: () => ({

	}),
	computed: {
		staticList: function () {
			return listData;
		}
	},
	template: `
	<v-row>
		<v-col cols="12" class="text-center">
			
		</v-col>
	</v-row>
	`
})