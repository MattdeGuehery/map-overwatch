const app = new Vue({
	delimiters: ['[[', ']]'],
	vuetify: new Vuetify({}),
	el: '#app',
	data: () => ({
		source: true,
		drawer: null,
		title: 'Overwatch Maps'
	}),
	computed: {

	},
	methods: {

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
				<v-tabs align-with-title>
				<v-tab>Home</v-tab>
				<v-tab>Map Callouts</v-tab>
				<v-tab>Top Down Maps</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>

		<v-content>
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col class="text-center">
						
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
