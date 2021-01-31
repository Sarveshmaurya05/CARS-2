class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Press me to play the game");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset the game")

    }
    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }
    display(){
        var title = createElement("h1");
        title.html("Lighting the queen")
        title.position(displayWidth/2, 20);
        
        this.input.position(displayWidth/2, displayHeight/2);
       
        this.button.position(displayWidth/2+100, displayHeight/2+50);
        this.reset.position(displayWidth-100, 20);
       
        this.button.mousePressed(()=>{
          this.input.hide()
            this.button.hide()
        player.name = this.input.value() 
        playerCount = playerCount+1;
        player.index=playerCount
        player.updatecount(playerCount);
        player.update();
       this.greeting.html("Hello"+player.name);
        this.greeting.position(displayWidth/2, displayHeight/2);


        })
        this.reset.mousePressed(()=>{
            player.updatecount(0);
            game.update(0)
        })
        
     
    }
}