var shopItems = [];
// set Game function prototype
var Preload = {
    
    init: function () {
        // set up input max pointers
        this.input.maxPointers = 1;
        // set up stage disable visibility change
        this.stage.disableVisibilityChange = true;
        // Set up the scaling method used by the ScaleManager
        // Valid values for scaleMode are:
        // * EXACT_FIT
        // * NO_SCALE
        // * SHOW_ALL
        // * RESIZE
        // See http://docs.phaser.io/Phaser.ScaleManager.html for full document
       // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //game.scale.refresh();
        // If you wish to align your game in the middle of the page then you can
        // set this value to true. It will place a re-calculated margin-left
        // pixel value onto the canvas element which is updated on orientation /
        // resizing events. It doesn't care about any other DOM element that may
        // be on the page, it literally just sets the margin.
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        // Force the orientation in landscape or portrait.
        // * Set first to true to force landscape. 
        // * Set second to true to force portrait.
        this.scale.forceOrientation(true, false);
        // Sets the callback that will be called when the window resize event
        // occurs, or if set the parent container changes dimensions. Use this 
        // to handle responsive game layout options. Note that the callback will
        // only be called if the ScaleManager.scaleMode is set to RESIZE.
        //this.scale.setResizeCallback(this.gameResized, this);
        // Set screen size automatically based on the scaleMode. This is only
        // needed if ScaleMode is not set to RESIZE.
        //this.scale.updateLayout(true);
        // Re-calculate scale mode and update screen size. This only applies if
        // ScaleMode is not set to RESIZE.
        //this.scale.refresh();

    },
    
    preload: function () {
   
        // Fonts
        game.load.bitmapFont('homespun', 'asset/fonts/homespun1.png', 'asset/fonts/homespun1.xml');
        
        // Main llama
        game.load.spritesheet('llama', 'asset/alpaca.png', 23, 31);
        
        // Randos
        game.load.spritesheet('pink', 'asset/brownAlpaca.png', 23, 31);
        game.load.spritesheet('invisi', 'asset/blueAlpaca.png', 23, 31);
        
        // Gold Llama
        game.load.spritesheet('gold', 'asset/goldLlama.png', 23, 31);
        
        // Capes
        game.load.spritesheet('super', 'asset/superAlpaca.png', 23, 31);
        game.load.spritesheet('bat', 'asset/batAlpaca.png', 23, 32);
        game.load.spritesheet('flag', 'asset/blueCapeAlpaca.png', 23, 31);
        
        // Hat Llamas
        game.load.spritesheet('cap', 'asset/capAlpaca.png', 23, 33);
        game.load.spritesheet('party', 'asset/partyAlpaca.png', 23, 35);
        game.load.spritesheet('fez', 'asset/fezAlpaca.png', 23, 34);
        game.load.spritesheet('racing', 'asset/racingAlpaca.png', 23, 34);
        game.load.spritesheet('afro', 'asset/afroAlpaca.png', 23, 38);
        game.load.spritesheet('wizard', 'asset/wizardAlpaca.png', 23, 36);
        game.load.spritesheet('army', 'asset/armyAlpaca.png', 23, 34);
        
        // All Llama
        game.load.spritesheet('allLlama', 'asset/allAlpaca.png', 23, 38);
        
        // Buttons
        game.load.spritesheet('gc', 'asset/gcBtn.png', 15, 18);
        game.load.spritesheet('lb', 'asset/lbBtn.png', 15, 18);
        game.load.spritesheet('shop', 'asset/shopBtn.png', 15, 18);
        game.load.spritesheet('buy', 'asset/buyBtn.png', 99, 28);
        game.load.spritesheet('select', 'asset/selectBtn.png', 99, 28);
        game.load.spritesheet('left', 'asset/leftBtn.png', 15, 15);
        game.load.spritesheet('right', 'asset/rightBtn.png', 15, 15);
        game.load.spritesheet('back', 'asset/backBtn.png', 15, 18);
        game.load.spritesheet('share', 'asset/shareBtn.png', 38, 28);
        game.load.spritesheet('flip', 'asset/flipBtn.png', 38, 28);
        game.load.image('selected', 'asset/selectedBtn.png');
        
        game.load.image('title', 'asset/title.png');
        
        // Trampoline
        game.load.spritesheet('trampoline', 'asset/trampoline.png', 85, 13);
        
        
        
         window.localStorage.setItem('flipsAmount', 5000);
        //game.load.audio('track3', 'asset/music/Cave 2.mp3');
    },

    create: function () {
        if (window.localStorage.getItem('storeItems') == null){
            var tempArray = ['selected', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy'];
            
            window.localStorage.setItem("storeItems", JSON.stringify(tempArray));
            
            shopItems = tempArray;
        } else {
            shopItems = JSON.parse(window.localStorage.getItem("storeItems"));
        }
        
       
        
        
        // Char Set up
        
        
        
        if (window.localStorage.getItem('chosenLlama') == null){
            window.localStorage.setItem('chosenLlama', 'llama');
            
        } 
        
        
        
        if (window.localStorage.getItem('totalFlips') == null){
            //localStorage.setItem('chosenLlama', 'llama');
            window.localStorage.setItem('totalFlips', 0);
        } 
        
        if (window.localStorage.getItem('flipsAmount') == null){
            window.localStorage.setItem('flipsAmount', 0);
        } 
         
        
        
        //this.resetField();
        
        //Music Setup
        //music = game.add.audio('track' + game.rnd.integerInRange(1,3));
        //music.play();
        //music.volume = .5;
        
        
        
        game.state.start('Game');
    },
    
    resetField: function (){
        
        var tempArray = ['selected', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy', 'buy'];
            
         window.localStorage.setItem("storeItems", JSON.stringify(tempArray));
            
        shopItems = tempArray;
        
       
        
       
       window.localStorage.setItem('chosenLlama', 'llama');
        
       
        window.localStorage.setItem('flipsAmount', 500);
    },
    
    setSuccess:function(obj){
        
    },
    
    getSuccess:function(obj){
        //game.state.start('Game');
    },
    
    setError: function(error){
        
    }


};