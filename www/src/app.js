
    /* globals Phaser:false, BasicGame: false */
    //  Create your Phaser game and inject it into the game div.
    //  We did it in a window.onload event, but you can do it anywhere (requireJS load, anonymous function, jQuery dom ready, - whatever floats your boat)
    //  We're using a game size of 480 x 640 here, but you can use whatever you feel makes sense for your game of course.
    
    
   
        
    var clientWidth = function () {  
        return Math.max(window.innerWidth, document.documentElement.clientWidth);
    };
    var clientHeight = function () {  
         return Math.max(window.innerHeight, document.documentElement.clientHeight);
    };

    var aspectRatio = window.innerHeight/window.innerWidth;
    console.log (aspectRatio);
    //
    var INIT_HEIGHT = 320;

    if (aspectRatio <= 1.8 && aspectRatio >= 1.7){
        // 16:9
        //var INIT_HEIGHT = 320;
        var INIT_WIDTH = 180;
         var SCALE = window.innerHeight/320;
        
    } else if (aspectRatio <= 1.4 && aspectRatio >= 1.3){
        // 4:3
       //var INIT_HEIGHT = 240;
        var INIT_WIDTH = 240;
         var SCALE = window.innerHeight/320;
    } else if (aspectRatio <= 1.6 && aspectRatio >= 1.4){
        // 3:2
        //var INIT_HEIGHT = 270;
        var INIT_WIDTH = 213;
        var SCALE = window.innerHeight/320;
    }else {
        var SCALE = window.innerHeight/320;
    }
        
    
    
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
   
    //PIXI.scaleModes.DEFAULT = PIXI.scaleModes.NEAREST;



    //  Add the States your game has.
    //  You don't have to do this in the html, it could be done in your Game state too, but for simplicity I'll keep it here.
    game.state.add('Preload', Preload);
    game.state.add('Game', Game);
    game.state.add('Shop', Shop);
    // game.state.add('Dead', Dead);
    // game.state.add('Menu', Menu);
    // game.state.add('Shop', Shop);
    // game.state.add('Continue', Continue);
    // game.state.add('Settings', Settings);

    //  Now start the Game state.
    game.state.start('Preload');
   

