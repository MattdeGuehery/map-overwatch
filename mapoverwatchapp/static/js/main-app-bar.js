Vue.component('main-app-bar', {
	prop: {
		startingTab: Number,
	},
	data: () => ({
		darkMode: false,
	}),
	created: function () {
		this.getDarkCookie();
	},
	computed: {
		selectedTab: {
			get: function () {
				return openingTab;
			},
			set: function () {
				return openingTab;
			}
		},
		tabCards: function () {
			let tabCards = [];
			tabCards.push({ name: 'Home', text: '', id: 0, link: '/', });
			tabCards.push({ name: 'Map Callouts', text: '', id: 1, link: '/mapcallouts/', });
			return tabCards;
		}
	},
	methods: {
		getElByTag: function (tag) {
			var element = document.getElementsByTagName(tag)[0];
			return element;
		},
		toggleDarkMode: function () {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
			var el = this.getElByTag('body');
			if (!this.$vuetify.theme.dark) {
				el.classList.remove('darkmode');
				this.darkMode = false;
				this.removeDarkCookie();
			} else {
				el.classList.add('darkmode');
				this.darkMode = true;
				this.setDarkCookie();
			}
		},
		getDarkCookie: function () {
			var darkMode = shared_readCookie('darkMode');
			this.darkMode = darkMode;
			this.$vuetify.theme.dark = darkMode;
		},
		setDarkCookie: function () {
			var date = new Date();
			var daysToAdd = 10 * 365; // add ~10 years to the cookie
			var expiration = date.setDate(date.getDate() + daysToAdd);
			shared_createCookie('darkMode', true, new Date(expiration).toUTCString());
		},
		removeDarkCookie: function () {
			shared_removeCookie('darkMode');
		}
	},
	template: `
	<v-app-bar app dense>
		<v-tabs align-with-title v-model="selectedTab">
			<v-tab v-for="card in tabCards" :key="card.id" :href="card.link">{{card.name}}</v-tab>
		</v-tabs>
		<v-spacer></v-spacer>
		<v-btn icon @click="toggleDarkMode">
			<v-icon v-if="!darkMode">mdi-lightbulb</v-icon>
			<v-icon v-if="darkMode">mdi-lightbulb-on-outline</v-icon>
		</v-btn>
	</v-app-bar>
	`
})