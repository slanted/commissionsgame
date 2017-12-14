var Menu = function(game) {
  console.log("menu");
};
var introText;

Menu.prototype = {
  preload: function() {

    this.game.load.image("playButton","assets/images/start_button.png");
  },
  create: function() {
    introText = this.game.add.text(10, 10, 'Here is the intro to the game', {fontSize: '16px', fill: '#FFF'});
    //var gameTitle = this.game.add.sprite(160,160,"title");
    //gameTitle.anchor.setTo(0.5,0.5);
    var playButton = this.game.add.button(160,320,"playButton",this.playTheGame,this);
    playButton.anchor.setTo(0.5,.75);
  },
  playTheGame: function() {
    this.game.state.start("Level");
  }
};