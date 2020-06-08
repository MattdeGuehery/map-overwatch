new Vue({
	vuetify: new Vuetify({}),
	el: '#app',
	data: () => ({
		source: true,
		drawer: null,
		maincomponent: component_name
	}),
	computed: {
	},
	methods: {
	},
	template: `
	<v-app id="app">
		<main-app-bar></main-app-bar>
		<v-content>
			<v-container fluid>			
				<component v-bind:is="maincomponent"></component>
			</v-container>
		</v-content>
	</v-app>
	`
});
