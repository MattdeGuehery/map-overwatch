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
			<v-container class="fill-height" fluid>
				<v-row align="center" justify="center">
					<v-col class="text-center">
						<component v-bind:is="maincomponent"></component>
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
	`
});
