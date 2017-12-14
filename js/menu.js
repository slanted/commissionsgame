var Menu = function(game) {
  console.log("menu");
};
var introText;

Menu.prototype = {
  preload: function() {

    this.game.load.image("titlepage","assets/images/titlepage.png");
  },
  create: function() {
    var playButton = this.game.add.button(0,0,"titlepage",this.playTheGame,this);
  },
  playTheGame: function() {
    this.game.state.start("Level");
  }
};