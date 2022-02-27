class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //you only use the file names of images in function preload()
    //image names never come in quotes
    car1=createSprite(width/2-50, height - 100)
    car1.addImage(car1_img)
    car1.scale=0.07

    car2=createSprite(width/2+100, height - 100)
    car2.addImage(car2_img)
    car2.scale=0.07

    cars=[car1, car2]


  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  updateState(state){
    database.ref('/').update({
      gameState:state
    })
  }

  play() {
    this.handleElements()
    Player.getPlayersInfo()
    //when allPlayers are defined
    if(allPlayers !== undefined)
    {
     
      image(track, 0, -height * 5, width, height * 6);
      drawSprites()
    }
  }
}
