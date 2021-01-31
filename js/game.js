class Game{

constructor(){

}
getState(){
    var gameStateref = database.ref("gameState");
    gameStateref.on("value", function(data){
        gameState = data.val();
    })
}
update(state){
    database.ref("/").update({
        gameState:state
    })

}
async start(){
    if(gameState==0){
    player= new Player();
    var playercountref=await database.ref("playerCount").once("value");
    if(playercountref.exists()){
        playerCount=playercountref.val()
        player.getCount();
    }
   
    form = new Form();
    form.display();
        
    }
    car1=createSprite(100, 200);
    car1.addImage(car1Image);
    car2=createSprite(300, 200);
    car2.addImage(car2Image);
    car3=createSprite(500, 200);
    car3.addImage(car3Image);
    car4=createSprite(700, 200);
    car4.addImage(car4Image);                 
    cars=[car1, car2, car3, car4]
}
 play(){
     form.hide()
     textSize(35);
     text("let's began", 150, 100);
     Player.getplayerinfo();
     player.getRank();
     if(allPlayer!==undefined){
         background("#c68767");
         image(track, 0, -displayHeight*4, displayWidth,displayHeight*5)
       var index=0;
       var x=170;        
       var y;
       for (var plr in allPlayer){
           index = index+1;
           x= x+200;
           y = displayHeight-allPlayer[plr].distance;
           cars[index-1].x=x;
           cars[index-1].y=y;
           if (index == player.index){
               stroke(5);
               fill("green");
               ellipse(x, y, 60, 60)
               cars[index-1].shapeColor= "green";
               camera.position.x=displayWidth/2;
               camera.position.y=cars[index-1].y;
           }
       }
             }
             
         if(keyIsDown(UP_ARROW) && player.index!==null){
             player.distance+=50;
             player.update()

         }
         if(player.distance>3850){
         gameState=2;
         player.rank=player.rank+1;
         Player.updateRank(player.rank)

         }
         drawSprites()
     }
     end(){
         console.log("gameEnded");
         console.log(player.rank)

     }

}