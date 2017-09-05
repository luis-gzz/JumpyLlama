var player, trampoline;
var adCounter = 1;

var Game = {

    
    
    preload: function () {
        
    
    },

    create: function () {
        //game.stage.smoothed=false
        game.physics.startSystem(Phaser.Physics.Arcade);
        game.stage.backgroundColor = 0xE2DFD4;
        //game.camera.onFadeComplete.add(this.gameOver, this);
       
        
        
        this.setupTrampoline();
        
        
        
        this.highscore;
        
         if (window.localStorage.getItem('highscoreLlama') == null){
            window.localStorage.setItem('highscoreLlama', 0);
            this.highscore = 0;
            
        } else {
            this.highscore = window.localStorage.getItem('highscoreLlama');    
        } 
        

        // --- Score Counter ---
        if (game.world.width >= 595){
            this.scoreText = game.add.bitmapText(game.world.centerX, game.world.centerY/2.5 + 20, 'homespun', '0', 84);
            this.scoreText.anchor.set(0.5, 0.5);
            //this.scoreText.visible = false;
        
            this.bestText = game.add.bitmapText(game.world.centerX, trampoline.y + 20, 'homespun', 'Best: '+ this.highscore, 24);
            this.bestText.anchor.set(0.5, 0.5);
            //this.bestText.visible = false;
            
        } else {
       
            this.scoreText = game.add.bitmapText(game.world.centerX, game.world.centerY/2.5 + 20, 'homespun', '0', 72);
            this.scoreText.anchor.set(0.5, 0.5);
            //this.scoreText.visible = false;
        
            this.bestText = game.add.bitmapText(game.world.centerX, trampoline.y + 20, 'homespun', 'Best: '+ this.highscore, 12);
            this.bestText.anchor.set(0.5, 0.5);
            //this.bestText.visible = false;
        }
        // -------------------------
        
        // --- Btn Setup ---
        // ios 
        //var gcBtn = game.add.button(game.world.centerX - 30, 25 , 'gc', this.gcClick, this, 0, 0, 1, 0);
        
        //android
        var gcBtn = game.add.button(game.world.centerX - 30, 25 , 'lb', this.gcClick, this, 0, 0, 1, 0);
        
        gcBtn.anchor.setTo(.5, .5);
        gcBtn.scale.set(SCALE, SCALE);
        gcBtn.smoothed = false;
        //gcBtn.visible = false;
        
        var shopBtn = game.add.button(game.world.centerX + 20, 25 , 'shop', this.shopClick, this, 0, 0, 1, 0);
        
        shopBtn.anchor.setTo(.5, .5);
        shopBtn.scale.set(SCALE, SCALE);
        shopBtn.smoothed = false;
        //shopBtn.visible = false;
        
        if (game.world.width >= 768){
            gcBtn.x -= 20;
            shopBtn.x += 20;
            
            gcBtn.y += 20;
            shopBtn.y += 20;
        } else if (game.world.height < 550){
            
        }
        // -----------------
        
        //var title = game.add.image(game.world.centerX, game.world.centerY - game.world.height/4, 'title');
        //title.anchor.set(.5,.5);
        //title.scale.set(.75,.75);
        //title.smoothed = false;
        
        // -- Player Set-up --
        //Phaser.Physics.Arcade.isPaused = true;
        player = new Player(game.world.centerX, game.world.centerY);
        //player.angle = -15;
        
        
        // -- ADS --
        //game.time.events.add(Phaser.Timer.SECOND * 1.25, this.startBanner, this);
        
        /*
        HeyzapAds.BannerAd.show(HeyzapAds.BannerAd.POSITION_BOTTOM).then(function() {
            // Native call successful.

        }, function(error) {
            // Handle Error

        }); */
        // -- ADS --
        
        
    },
    
    startBanner: function (){
        if(AdMob) AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER);
    },
    
    update: function(){
        
        game.physics.arcade.collide(player, trampoline, this.bounce);
        
        if (player.y > game.world.height || player.x < 0 || player.x > game.world.width){
            //this.fadeIt();
            this.gameOver();
        }
        
        this.updateText();
        // --- Debug ---
        //game.debug.spriteInfo(player, 32, 32);
       // game.debug.body(player);
        //console.log(game.world.width);
        //console.log(game.world.height);
        //game.debug.body(this.collider);
        //game.debug.body(this.collider2);
        
    },
    
    setupTrampoline: function(){
        
        trampoline = game.add.sprite(game.world.centerX, game.world.height-game.world.height/5, 'trampoline');
        trampoline.anchor.set(.5,.5);
        trampoline.scale.set(SCALE,SCALE);
        trampoline.smoothed = false;
        
        trampoline.animations.add('bounce', [0,1,2,1,0]);
        trampoline.animations.add('still', [0]);
        trampoline.animations.play('still', 1, false);
        
        
        game.physics.enable(trampoline, Phaser.Physics.ARCADE);
        trampoline.body.allowGravity = false;
        trampoline.body.immovable = true;
        
        
    },
    
    bounce: function(p, t){
        t.animations.play('bounce', 15, false);
        
        p.firstBounce = true;
        
        
        if (p.pastHalfRange === true){
           p.body.bounce.set(game.rnd.realInRange(.9,1.01)); 
        } else {
            p.body.bounce.set(game.rnd.realInRange(1.01,1.2)); 
        }
        
        
        if (p.angle >= 10 && p.angle < 25){
            p.body.velocity.x = game.rnd.realInRange(50,60);
            
        } else if (p.angle >=25 && p.angle<40){
            p.body.velocity.x = game.rnd.realInRange(60,70);
            
        } else if (p.angle >= 40 && p.angle < 50){
           p.body.velocity.x = game.rnd.realInRange(70,80);
            
        } else if (p.angle >= 50 && p.angle < 70){
            p.body.velocity.x = game.rnd.realInRange(115,125);
            
        } else if (p.angle <= -10 && p.angle > -25){
            p.body.velocity.x = -game.rnd.realInRange(50,60);
            
        } else if (p.angle <= -25 && p.angle > -40){
            p.body.velocity.x = -game.rnd.realInRange(60,70);
            
        } else if (p.angle <= -40 && p.angle > -50){
           p.body.velocity.x = -game.rnd.realInRange(70,80);
            
        } else if (p.angle <= -50 && p.angle > -70){
           p.body.velocity.x = -game.rnd.realInRange(115,125);
            
        } else if (p.angle < 10 && p.angle > -10){
            p.body.velocity.x = 0;
            
        } else if (p.angle >= 70 || p.angle <= -70 ){
            p.canFlip = false;
            p.body.gravity.y = 0;
            p.body.velocity.y = p.body.velocity.x = 0;
            game.time.events.add(Phaser.Timer.SECOND * .5, Game.gameOver, this);
            
        }
        
        
    },
    
    updateText: function (){
       //this.scoreBoard.setText(player.flips); 
        this.scoreText.text = player.flips;
        
    },
    
    fadeIt: function(){
        game.camera.fade(0x000000, 1000);
    },
    
    gameOver: function(){
        // -- ADS --
        /*adCounter++;
        if (adCounter >= 10){
            adCounter = 0;
            
            HeyzapAds.InterstitialAd.show().then(function() {
                // Native call successful.

            }, function(error) {
                // Handle Error

            }); 
        }*/
        // ---------
        
        
        if (window.localStorage.getItem('highscoreLlama') == null){
            
            window.localStorage.setItem('highscoreLlama', player.flips);
            this.highscore = player.flips;
            
            
            /* iOS
            var data = {
                score: this.highscore,
                leaderboardId: "most123flips"
            };
            gamecenter.submitScore(Game.successCallback, Game.failureCallback, data);*/
            
            /*Android*/
            var data = {
                score: this.highscore,
                leaderboardId: "CgkIjtrB4uwIEAIQAQ"
            };
            window.plugins.playGamesServices.submitScore(data);
            
            
        } else if (player.flips > window.localStorage.getItem('highscoreLlama')){
            this.highscore = player.flips;
            window.localStorage.setItem('highscoreLlama', player.flips);
            
             /* iOS
            var data = {
                score: this.highscore,
                leaderboardId: "most123flips"
            };
            gamecenter.submitScore(Game.successCallback, Game.failureCallback, data);*/
            
             /*Android*/
            var data = {
                score: this.highscore,
                leaderboardId: "CgkIjtrB4uwIEAIQAQ"
            };
            window.plugins.playGamesServices.submitScore(data);
            
            
        } else {
            this.highscore = window.localStorage.getItem('highscoreLlama');
        }
        
        
        window.localStorage.setItem('totalFlips', parseInt(window.localStorage.getItem('totalFlips')) + player.flips);
        
        /*
        var data = {
                score: parseInt(window.localStorage.getItem('totalFlips')),
                leaderboardId: "all123flips"
        };
        gamecenter.submitScore(Game.successCallback, Game.failureCallback, data);*/
        
        var tempFlips = parseInt(window.localStorage.getItem('flipsAmount')) + player.flips;
        window.localStorage.setItem('flipsAmount', tempFlips);
        
        
        game.state.start('Game');
        
    
    },
    
    gcClick: function(){
        /* iOS
        var data = {
            leaderboardId: "most123flips"
        };
        
        if (gcReady == true){
            gamecenter.showLeaderboard(Game.successCallback, Game.failureCallback, data);
        }*/
        
        /* Android*/
        window.plugins.playGamesServices.showAllLeaderboards();
        
    },
    
    shopClick: function(){
        // -- ADS --
        if(AdMob) AdMob.hideBanner();
        
        /*HeyzapAds.BannerAd.hide().then(function() {
        // Native call successful.

        }, function(error) {
        // Handle Error

        });*/
        // -- ADS --
        
        game.state.start('Shop');
        
    },
    
    successCallback: function(){
        
    },
    
    failureCallback: function() {
    
    }
   
};
