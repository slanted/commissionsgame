var QualifyingRules = function() {};

QualifyingRules.prototype = {
  preload: function() {
    this.game.load.image("QualifyingRules","assets/images/QualPhaseRules.png");
  },
  create: function() {
    var playButton = this.game.add.button(0,0,"QualifyingRules",this.playTheGame,this);
  },
  playTheGame: function() {
    this.game.state.start("Level2");
  }
};