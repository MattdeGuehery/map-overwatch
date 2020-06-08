Vue.component('map-list', {
	data: () => ({
		localListType: false
	}),
	created: function () {
		this.getListCookie();
	},
	computed: {
		buttons: function () {
			var buttons = [];
			buttons.push({ text: 'Alphabetical', value: false, });
			buttons.push({ text: 'By Map Type', value: true, });
			return buttons;
		},
		mapList: function () {
			var data = [];
			_.forEach(window.data, function (map) {
				if (_.includes(map.map_name, '-')) {
					map.map_name = _.trim(map.map_name.slice(0, map.map_name.indexOf('-')));
				}
				data.push(map);
			});
			data = _.chain(data).uniqBy('map_name').sortBy('map_id').value();
			if (this.listType) {
				data = _.groupBy(data, 'map_type');
			}
			return this.listType ? (data || {}) : (data || []);
		},
		listType: {
			get: function () {
				return this.localListType;
			},
			set: function (newVal) {
				this.localListType = newVal == 'true' || newVal;
				if (newVal) {
					this.setListCookie();
				} else {
					this.removeListCookie();
				}
			}
		}
	},
	methods: {
		saveChange: function (newVal) {
			if (newVal != this.listType) {
				this.listType = newVal;
			}
		},
		getListCookie: function () {
			var listType = shared_readCookie('listType');
			this.listType = listType;
		},
		setListCookie: function () {
			var date = new Date();
			var daysToAdd = 10 * 365; // add ~10 years to the cookie
			var expiration = date.setDate(date.getDate() + daysToAdd);
			shared_createCookie('listType', true, new Date(expiration).toUTCString());
		},
		removeListCookie: function () {
			shared_removeCookie('listType');
		}
	},
	template: `
	<v-row>
		<v-col cols="12">
			<v-row>
				<v-col offset="10" cols="2">
					<v-btn-toggle @change="saveChange" v-model="listType" mandatory>
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