var Menu = function(game) {};

Menu.prototype = {
  preload: function() {
    this.game.load.image("titlepage","assets/images/titlepage.png");
  },
  create: function() {
    var playButton = this.game.add.button(0,0,"titlepage",this.sharingRules,this);
  },
  sharingRules: function() {
    this.game.state.start("SharingRules");
  }
};