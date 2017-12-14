var SharingRules = function(game) {};

SharingRules.prototype = {
  preload: function() {
    this.game.load.image("sharingRules","assets/images/SharingRules.png");
  },
  create: function() {
    var playButton = this.game.add.button(0,0,"sharingRules",this.playTheGame,this);
  },
  playTheGame: function() {
    this.game.state.start("Level");
  }
};