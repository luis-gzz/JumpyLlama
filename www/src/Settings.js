
var Settings = {


    preload: function () {

    
    },

    create: function () {
        this.stars = [];
        
        this.addStarField();
        
         

        
        
        
        
        this.creditsText1 = game.add.text(game.world.centerX, game.world.centerY- 60, 'Code/SFX', {
            font: "20px fff",
            fill: "#FFFFFF",
            align: "center"
        });
        this.creditsText1.x = Math.round(this.creditsText1.x - this.creditsText1.width/2);
        this.creditsText1.y = Math.round(this.creditsText1.y - this.creditsText1.height/2);
        
        this.creditsText15 = game.add.text(game.world.centerX, this.creditsText1.y + 60, 'Luis Gonzalez', {
            font: "12px fff",
            fill: "#FFFFFF",
            align: "center"
        });
        this.creditsText15.x = Math.round(this.creditsText15.x - this.creditsText15.width/2);
        this.creditsText15.y = Math.round(this.creditsText15.y - this.creditsText15.height/2);
        
       
        this.creditsText2 = game.add.text(game.world.centerX, this.creditsText15.y +60, 'Graphics', {
            font: "20px fff",
            fill: "#FFFFFF",
            align: "center"
        });
        this.creditsText2.x = Math.round(this.creditsText2.x - this.creditsText2.width/2);
        this.creditsText2.y = Math.round(this.creditsText2.y - this.creditsText2.height/2);
        
        this.creditsText25 = game.add.text(game.world.centerX, this.creditsText2.y + 90, 'Explosion: J-Robot(opengameart.org)\nMoon: BlackMoon Design\nTrump/Aliens: Luis Gonzalez', {
            font: "12px fff",
            fill: "#FFFFFF",
            align: "center"
        });
        this.creditsText25.x = Math.round(this.creditsText25.x - this.creditsText25.width/2);
        this.creditsText25.y = Math.round(this.creditsText25.y - this.creditsText25.height/2);
        
        this.creditsText3 = game.add.text(game.world.centerX, this.creditsText25.y +120, 'UI', {
            font: "20px fff",
            fill: "#FFFFFF",
            align: "center"
        });
        this.creditsText3.x = Math.round(this.creditsText3.x - this.creditsText3.width/2);
        this.creditsText3.y = Math.round(this.creditsText3.y - this.creditsText3.height/2);
        
        this.creditsText35 = game.add.text(game.world.centerX, this.creditsText3.y + 70, 'Based on work by Cam Tatz\n Edited by Luis Gonzalez', {
            font: "12px fff",
            fill: "#FFFFFF",
            align: "center"
        });
        this.creditsText35.x = Math.round(this.creditsText35.x - this.creditsText35.width/2);
        this.creditsText35.y = Math.round(this.creditsText35.y - this.creditsText35.height/2);
        
        var backBtn = game.add.button(30, 30, 'backBtn', this.backClick, this, 0, 0, 1, 0);
        
        backBtn.anchor.setTo(.5, .5);
        backBtn.scale.set(2, 2);
        backBtn.smoothed = false;
        
      
        
    },
    
    update: function(){
       this.starUpdate();
        
        
    },
    
    backClick: function (){
        if (fromMenu == true){
            game.state.start('Menu');
        } else {
            game.state.start('Dead');
        }
        
    },
    
    buyClick: function (){

    },
    
    
    addStarField: function (){
        
        
        
        for (var i = 0; i < 75; i++)
        {
        //  Update the stars y position based on its speed
        //stars[i].x -= stars[i].speed;
        
            var star  = game.add.sprite(game.world.randomX, game.world.randomY, 'star');
            var speeds = [.10,.3,.55];
            star.speed = game.rnd.pick(speeds);
            this.stars.push(star);
        }
        
        

    },
    
    starUpdate: function(){
        for (var i = 0; i < 75; i++)
        {
            //  Update the stars y position based on its speed
            
            this.stars[i].x -= this.stars[i].speed;

            if (this.stars[i].x < 0)
            {
                //  Off the bottom of the screen? Then wrap around to the top
                this.stars[i].y = game.world.randomY;
                this.stars[i].x = game.world.width + 10;
            }

        }
    }
};