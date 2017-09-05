
var Shop = {


    preload: function () {

        AdMob.prepareInterstitial({
            adId: admobid.interstitial,
            autoShow: false
        });
    },

    create: function () {
        this.character = window.localStorage.getItem('chosenLlama');
        this.status = 'selected';
        this.itemNumber = 0;
        
        
        this.llama = game.add.sprite(game.world.centerX, game.world.centerY-100, "allLlama");
        
        this.llama.scale.set(SCALE, SCALE);
        this.llama.smoothed = false;
        this.llama.animations.add('0', [0]);
        this.llama.animations.add('1', [1]);
        this.llama.animations.add('2', [2]);
        this.llama.animations.add('3', [3]);
        this.llama.animations.add('4', [4]);
        this.llama.animations.add('5', [5]);
        this.llama.animations.add('6', [6]);
        this.llama.animations.add('7', [7]);
        this.llama.animations.add('8', [8]);
        this.llama.animations.add('9', [9]);
        this.llama.animations.add('10', [10]);
        this.llama.animations.add('11', [11]);
        
        
        this.llama.anchor.setTo(.5, .5);
        
        // ===========
        this.flipText = game.add.bitmapText(game.world.centerX, 20, 'homespun', window.localStorage.getItem('flipsAmount')+ ' Flips', 10);
        this.flipText.anchor.set(0.5, 0.5);
        
         this.nameText = game.add.bitmapText(game.world.centerX, this.llama.y - 80, 'homespun', window.localStorage.getItem('chosenLlama'), 24);
        this.nameText.anchor.set(0.5, 0.5);
        
        this.priceText = game.add.bitmapText(game.world.centerX, this.llama.y + 100, 'homespun', '150 Flips', 14);
        this.priceText.anchor.set(0.5, 0.5);
        // ==============
        
        
        switch(this.character) {
        case 'llama':
            this.itemNumber = 0;
        
        break;
        case 'afro':

            this.itemNumber = 1;
            
        break;
        case 'army':
       
            this.itemNumber = 2;
            
        break;
        case 'cap':
           
            this.itemNumber = 3;
            
        break;
        case 'fez':
           
            this.itemNumber = 4;
            
        break;
        case 'party':
        
            this.itemNumber = 5;
            
        break; 
        case 'racing':
            
            this.itemNumber = 6;
            
        break;
        case 'wizard':
            
            this.itemNumber = 7;
            
        break;
        case 'super':
            
            this.itemNumber = 8;
            
        break;
        case 'bat':
            
            this.itemNumber = 9;
            
        break;
        case 'flag':
            
            this.itemNumber = 10;
            
        break;
        case 'gold':
           
            this.itemNumber = 11;
            
        break;
                
           
        }
        
        this.shopOrg();
        
        
        this.buyBtn = game.add.button(game.world.centerX, this.priceText.y + 60, 'buy', this.buyClick, this, 0, 0, 1, 0);
        
        this.buyBtn.anchor.setTo(.5, .5);
        this.buyBtn.scale.set(SCALE, SCALE);
        this.buyBtn.smoothed = false;
        
        this.selectBtn = game.add.button(game.world.centerX, this.priceText.y + 60, 'select', this.selectClick, this, 0, 0, 1, 0);
        
        this.selectBtn.anchor.setTo(.5, .5);
        this.selectBtn.scale.set(SCALE, SCALE);
        this.selectBtn.smoothed = false;
        
        this.selectedBtn = game.add.sprite(game.world.centerX, this.priceText.y + 60, 'selected');
        
        this.selectedBtn.anchor.setTo(.5, .5);
        this.selectedBtn.scale.set(SCALE, SCALE);
        this.selectedBtn.smoothed = false;
        
        
        // -- Left/Back Btns --
        this.rightBtn = game.add.button(game.world.centerX + 80, this.llama.y, 'right', this.rightClick, this, 0, 0, 0, 0);
        
        this.rightBtn.anchor.setTo(.5, .5);
        this.rightBtn.scale.set(SCALE, SCALE);
        this.rightBtn.smoothed = false;
        
        this.leftBtn = game.add.button(game.world.centerX - 80, this.llama.y, 'left', this.leftClick, this, 0, 0, 0, 0);
        
        this.leftBtn.anchor.setTo(.5, .5);
        this.leftBtn.scale.set(SCALE, SCALE);
        this.leftBtn.smoothed = false;
        
         if (game.world.width >= 600){
            this.leftBtn.x -= 50;
            this.rightBtn.x += 50;
            
            
        } else if (game.world.height < 550){
            this.leftBtn.x -= 10;
            this.rightBtn.x += 10;
        }
        
        // --------------------
        
        
        // --- Ad and share buttons ---
        var shareBtn = game.add.button(game.world.centerX + 50, this.selectedBtn.y + 100, 'share', this.shareClick, this, 0, 0, 1, 0);
        
        shareBtn.anchor.setTo(.5, .5);
        shareBtn.scale.set(SCALE, SCALE);
        shareBtn.smoothed = false;
        
        var adBtn = game.add.button(game.world.centerX - 50, this.selectedBtn.y + 100, 'flip', this.adClick, this, 0, 0, 1, 0);
        
        adBtn.anchor.setTo(.5, .5);
        adBtn.scale.set(SCALE, SCALE);
        adBtn.smoothed = false;
        

        if (game.world.width >= 768){
            shareBtn.x += 40;
            adBtn.x -= 40;
            
            shareBtn.y += 50;
            adBtn.y += 50;
        } 
        
        this.adText = game.add.bitmapText(game.world.centerX, adBtn.y + 50, 'homespun', 'Watch AD for 50 Flips', 10);
        this.adText.anchor.set(0.5, 0.5);
        
         if (game.world.width >= 600){
            this.adText.y += 30;
        } 
        //----------------------------
        
        /*this.removeAdsText = game.add.text(game.world.centerX, priceBtn.y + 60, '+ Remove Ads', {
            font: "24px fff",
            fill: "#FFFFFF",
            align: "center"
        });
        this.removeAdsText.x = Math.round( this.removeAdsText.x );
        this.removeAdsText.y = Math.round( this.removeAdsText.y );
        this.removeAdsText.anchor.setTo(0.5, 0.5);
        */
        var backBtn = game.add.button(30, 30, 'back', this.backClick, this, 0, 0, 1, 0);
        
        backBtn.anchor.setTo(.5, .5);
        backBtn.scale.set(SCALE, SCALE);
        backBtn.smoothed = false;
        
        this.shopOrg();
        
    },
    
    update: function(){
        switch (this.status) {
        case 'buy':
            this.selectBtn.kill();
            this.selectedBtn.kill();
            if (this.buyBtn.alive == false){
                this.buyBtn.revive(game.world.centerX, this.priceText.y + 60);
            }
        break;
        case 'select':
            this.selectedBtn.kill();
            this.buyBtn.kill();
            if (this.selectBtn.alive == false){
                this.selectBtn.revive(game.world.centerX, this.priceText.y + 60);
            }
        break;
        case 'selected':
            this.selectBtn.kill();
            this.buyBtn.kill();
            if (this.selectedBtn.alive == false){
                this.selectedBtn.revive(game.world.centerX, this.priceText.y + 60);
            }
        break;
    
        }
        
    },
    
    toGame: function (){
        game.state.start('Game');
    },
    
    backClick: function (){
        if (adCounter == 2){
            AdMob.showInterstitial();
            /*HeyzapAds.InterstitialAd.show().then(function() {
                // Native call successful.
                //game.time.events.add(Phaser.Timer.SECOND * 4,.toGame, this);
            }, function(error) {
                // Handle Error
                game.state.start('Game');
            }); */
        } else {
            
            adCounter++;
            game.state.start('Game');
        }
        
        
        
        
      
            game.state.start('Game');
        
    },
    
    buyClick: function (){
        if (this.itemNumber == 11){
            if (parseInt(window.localStorage.getItem('flipsAmount')) >= 1000){
            
                shopItems[this.getCurrentNumber()] = 'select';
                shopItems[this.itemNumber] = 'selected';
            
                window.localStorage.setItem("storeItems", JSON.stringify(shopItems));
                
            
                var tempFlips = parseInt(window.localStorage.getItem('flipsAmount')) - 1000;
                window.localStorage.setItem('flipsAmount', tempFlips);
                this.flipText.text = tempFlips+ ' Flips';
            
                window.localStorage.setItem('chosenLlama', this.getLlamaType());
                
                this.character = this.getLlamaType();
            
                this.status = shopItems[this.itemNumber];
            }
        } else {
            if (parseInt(window.localStorage.getItem('flipsAmount')) >= 500){
                shopItems[this.getCurrentNumber()] = 'select';
                shopItems[this.itemNumber] = 'selected';
            
                window.localStorage.setItem("storeItems", JSON.stringify(shopItems));
                
                
                var tempFlips = parseInt(window.localStorage.getItem('flipsAmount')) - 500;
                window.localStorage.setItem('flipsAmount', tempFlips);
                
                this.flipText.text = tempFlips+ ' Flips';
            
                window.localStorage.setItem('chosenLlama', this.getLlamaType());
                
                this.character = this.getLlamaType();
            
                this.status = shopItems[this.itemNumber];
            }
        }
        
        
        
    },
    
    selectClick: function (){
        shopItems[this.getCurrentNumber()] = 'select';
        shopItems[this.itemNumber] = 'selected';
            
        window.localStorage.setItem("storeItems", JSON.stringify(shopItems));
        
            
        
        window.localStorage.setItem('chosenLlama', this.getLlamaType());
        
        this.character = this.getLlamaType();
            
        this.status = shopItems[this.itemNumber];
        
        
    },
    
    rightClick: function (){
        if (this.itemNumber < 11){
            this.itemNumber++;
            this.shopOrg();  
        }
        
        
    },
    
    leftClick: function (){
        if (this.itemNumber > 0){
            this.itemNumber--;
            this.shopOrg();
        }
        
        
    },
    
    adClick: function (){
       
        /*HeyzapAds.IncentivizedAd.show().then(function() {
            // Native call successful.
            return HeyzapAds.IncentivizedAd.fetch();
            
            
 
        }, function(error) {
            // Handle Error
 
        });*/
        window.unityads.showRewardedVideoAd();
        
    },
    
    shareClick: function (){
        
        var message = {
            text: "Jumping with llamas is fun! Can you beat my high score of " + window.localStorage.getItem('highscoreLlama')+ " on Jumpy Llama?"
            //activityTypes: ["PostToFacebook", "PostToTwitter"] // -- iOS
        };
        window.socialmessage.send(message);
        
    },
    
    shopOrg: function (){
        switch(this.itemNumber) {
        case 0:
            this.nameText.text = 'Llama';
            this.priceText.text = '500 Flips';
        
        break;
        case 1:
            this.nameText.text = 'Afro Llama';
            this.priceText.text = '500 Flips';
            
        break;
        case 2:
            this.nameText.text = 'Army Helmet';
            this.priceText.text = '500 Flips';
            
        break;
        case 3:
            this.nameText.text = 'Cap';
            this.priceText.text = '500 Flips';
            
        break;
        case 4:
            this.nameText.text = 'Fez';
            this.priceText.text = '500 Flips';
            
        break;
        case 5:
            this.nameText.text = 'Party Hat';
            this.priceText.text = '500 Flips';
            
        break; 
        case 6:
            this.nameText.text = 'Racing Helmet';
            this.priceText.text = '500 Flips';
            
        break;
        case 7:
            this.nameText.text = 'Wizard Hat';
            this.priceText.text = '500 Flips';
            
        break;
        case 8:
            this.nameText.text = 'Super LLama';
            this.priceText.text = '500 Flips';
            
        break;
        case 9:
            this.nameText.text = 'Bat Llama';
            this.priceText.text = '500 Flips';
            
        break;
        case 10:
            this.nameText.text = 'Llamaville';
            this.priceText.text = '500 Flips';
            
        break;
        case 11:
            this.nameText.text = 'Golden Llama';
                this.priceText.text = '1000 Flips';
            
            
        break;
                
           
        }
        
        this.llama.animations.play(this.itemNumber.toString(), 10, false);
        this.status = shopItems[this.itemNumber];
        
    },
    
    getCurrentNumber: function(){
        var number;
        
        switch(this.character) {
                
        case 'llama':
            number = 0;
        
        break;
        case 'afro':

            number =1;
            
        break;
        case 'army':
       
            number =2;
            
        break;
        case 'cap':
           
            number =3;
            
        break;
        case 'fez':
           
            number =4;
            
        break;
        case 'party':
        
            number =5;
            
        break; 
        case 'racing':
            
            number =6;
            
        break;
        case 'wizard':
            
            number =7;
            
        break;
        case 'super':
            
            number = 8;
            
        break;
        case 'bat':
            
            number =9;
            
        break;
        case 'flag':
            
            number = 10;
            
        break;
        case 'gold':
           
            number = 11;
            
        break;
                
           
        }
        return number;
        
    },
    
    getLlamaType: function (){
        var type;
        
        switch(this.itemNumber) {
        case 0:
            type = 'llama';
            
        
        break;
        case 1:
            type = 'afro';
            
            
        break;
        case 2:
            type ='army';
            
            
        break;
        case 3:
            type = 'cap';
            
            
        break;
        case 4:
            type = 'fez';
            
            
        break;
        case 5:
           type = 'party';
            
            
        break; 
        case 6:
            type = 'racing';
            
            
        break;
        case 7:
            type = 'wizard';
            
            
        break;
        case 8:
           type = 'super';
            
            
        break;
        case 9:
            type = 'bat';
            
            
        break;
        case 10:
            type = 'flag';
            
            
        break;
        case 11:
            type = 'gold';
            
            
        break;
             
            
           
        }
        
        return type;
        
    }


};
