var GameOver = function() {};

GameOver.prototype = {
  preload: function() {
    this.game.load.image("GameOver","assets/images/GameOver.png");
  },
  create: function() {
    var playButton = this.game.add.button(0,0,"GameOver",this.playTheGame,this);
  },
  playTheGame: function() {
    this.game.state.start("Level");
  }
};