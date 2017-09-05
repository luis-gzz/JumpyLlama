var fromMenu = true;
var music;

var Menu = {


    preload: function () {

    
    },

    create: function () {
        
    },
    
    update: function(){
       
        
        
    },
    
    playClick: function (){
        
    },
    
    rankClick: function (){
       /* var data = {
            leaderboardId: "01boardMooniac"
        };
        
        if (gcReady == true){
            gamecenter.showLeaderboard(Menu.successCallback, Menu.failureCallback, data);
        }*/
    },
    
    shopClick: function (){
        fromMenu = true;
        game.state.start('Shop');
    },
    
    settingsClick: function (){
        fromMenu = true;
        game.state.start('Settings');
    },
    
    successCallback: function() {
        
    },
    
    failureCallback: function() {
    
    }
};