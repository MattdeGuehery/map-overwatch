Vue.component('home-cards', {
	data: () => ({

	}),
	computed: {
		tabCards: function () {
			let tabCards = [];
			tabCards.push({ name: 'Map Callouts', text: '', id: 1 });
			tabCards.push({ name: 'Top Down Maps', text: '', id: 2 });
			return tabCards;
		}
	},
	template: `
	<div>
		<v-card class="mx auto my-2" v-for="(card, index) in tabCards" :key="index">
			<v-card-title>{{card.name}}</v-card-title>
			<v-card-text>{{card.text}}</v-card-text>
		</v-card>
	</div>
	`
})