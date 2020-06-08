Vue.component('main-app-bar', {
	prop: {
		startingTab: Number,
	},
	data: () => ({
		darkMode: false,
		title: 'Map Overwatch'
	}),
	created: function () {
		this.getDarkCookie();
	},
	computed: {
	},
	methods: {
		sendToHomePage: function () {
			return window.location = '/';
		},
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
	<v-app-bar app>
		<h1 cursor="pointer" @click="sendToHomePage">{{ title }}</h1>
		<v-spacer></v-spacer>
		<v-btn icon @click="toggleDarkMode">
			<v-icon v-if="!darkMode">mdi-lightbulb</v-icon>
			<v-icon v-if="darkMode">mdi-lightbulb-on-outline</v-icon>
		</v-btn>
	</v-app-bar>
	`
})