class myGame{

constructor(){



}

getgameState(){

    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState = data.val();
        console.log("Gamestate " + gameState);
    });

}

setgameState(){

    var gameStateRef = database.ref('/');
    gameStateRef.update({

        gameState: gameState

    });

}

start(){

    form = new Form();
    player = new Player();
    form.display();
    player.getPlayerCount();

}

play(){



}

}