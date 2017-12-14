window.onload = function() {
	var game = new Phaser.Game(1200, 600, Phaser.AUTO);

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	game.state.add("Menu", Menu);
	game.state.add("SharingRules", SharingRules);
	game.state.add("Congrats", Congrats);
	game.state.add("Level", Level);
	game.state.add("QualifyingRules", QualifyingRules);
	game.state.add("Level2", Level2);

	game.state.start("Menu");
};
