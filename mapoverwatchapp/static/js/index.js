const app = new Vue({
	delimiters: ['[[', ']]'],
	vuetify: new Vuetify({}),
	el: '#app',
	data: () => ({
		source: true,
		drawer: null,
		selectedTab: 0,
		title: 'Overwatch Maps',
		darkMode: false,
	}),
	created: function () {
		this.getDarkCookie();
	},
	computed: {
		tabCards: function () {
			let tabCards = [];
			tabCards.push({ name: 'Map Callouts', text: '', id: 1 });
			tabCards.push({ name: 'Top Down Maps', text: '', id: 2 });
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
	<v-app id="app">
		<!-- <v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-contact-mail</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer> -->

		<v-app-bar app color="indigo" dark>
			<!-- <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon> -->
			<v-toolbar-title>[[title]]</v-toolbar-title>
			<template v-slot:extension>
				<v-tabs align-with-title v-model="selectedTab">
					<v-tab key="0">Home</v-tab>
					<v-tab v-for="card in tabCards" :key="card.id">[[card.name]]</v-tab>
				</v-tabs>
			</template>
			<v-spacer></v-spacer>
			<v-btn icon @click="toggleDarkMode">
				<v-icon v-if="!darkMode">mdi-lightbulb</v-icon>
				<v-icon v-if="darkMode">mdi-lightbulb-on-outline</v-icon>
			</v-btn>
		</v-app-bar>

		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col class="text-center">
						<home-cards></home-cards>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
		<!-- <v-footer color="indigo" app>
			<span class="white--text">&copy; 2019</span>
		</v-footer> -->
	</v-app>
	`
});
