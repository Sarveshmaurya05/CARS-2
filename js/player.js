class Player{

    constructor(){
     this.index=null;
     this.distance=0;
     this.name=null;
     this.rank= null;
    }
    getCount(){
        var playercountref = database.ref("playerCount");
        playercountref.on("value", function(data){
            playerCount = data.val();
        })
    }
    updatecount(count){
        database.ref("/").update({
           playerCount:count
        })
    
    }
    update(){
        var playerIndex= "players/player"+this.index
        database.ref(playerIndex).set({
            name:this.name,distance:this.distance
        })
    }
    static getplayerinfo(){
    var playerref=database.ref("players");
    playerref.on("value", (data)=>{
        allPlayer=data.val()
    })              
    }

    getRank() {
        
        database.ref("carRank").on("value", (data)=>{
            this.rank=data.val()
        }) 
        
    }
    static updateRank(rank){
        database.ref("/").update({
            carRank:rank
            
        })
    }
}