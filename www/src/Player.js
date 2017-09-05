Player = function ( x, y) {
    
    

    Phaser.Sprite.call(this, game, x, y, localStorage.getItem('chosenLlama'));
    this.animations.add('stand', [0]);
    this.animations.add('run', [1, 2]);
    this.animations.add('flip', [3]);
    this.animations.play('stand', 2, false);
    this.anchor.setTo(.5, .5);
    this.angle = 0;
    this.scale.set(SCALE, SCALE);
    this.smoothed = false;
 
    this.firstBounce = false;
    
    //Physics
    game.add.existing(this);
    game.physics.enable(this, Phaser.Physics.ARCADE);
    //this.body.setSize(14, 23);
    this.body.gravity.y = 1550; 
    //this.body.allowGravity = false;
    this.body.bounce.y = 1.5;
    this.speed = 450;
    //this.body.drag.set(2000, 2000);
    //this.body.maxVelocity.x = 150;
  
    
    this.flips = 0;
    
    this.pastHalfRange = false;
    this.hasStarted = false;
    this.canFlip = true;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;




/**
 * Automatically called by World.update
 */
Player.prototype.update = function() {
   
    if (this.body.velocity.y < 0 && this.body.y < game.world.height/3.5 ){
        this.pastHalfRange = true;
    } else if (this.body.velocity.y < 0 && this.body.y > game.world.height/3.5){
        this.pastHalfRange = false;
    }
    
    if (this.hasStarted == false){
            this.body.velocity.y = 0;
            this.body.gravity.y = 0;
    }
    
    if (game.input.activePointer.isDown ) {
        
        
        
        
       // this.direction = 2;
        if (this.hasStarted == false){
            this.body.gravity.y = 1550; 
            this.hasStarted = true;
        }else {
            
            if (this.firstBounce == true && this.canFlip == true){
                this.angle += 13.5;
                this.animations.play('flip',1, false);
                
                if ((this.angle >= -5 && this.angle <= 5) && this.y < trampoline.y){
                    this.flips++;
                }
            
            }
           
            
        }
         
        
       
        
    } else {
        this.animations.play('stand');
    }
    
    
    if (this.body.velocity.x < 0){
        this.scale.x = -SCALE;
    } else if (this.body.velocity.x > 0)
        this.scale.x = SCALE;
    

};

Player.prototype.leftClick = function (){
    
    
};

Player.prototype.rightClick = function (){
    
    
};

/*
Cow.prototype.getCartesianX = function (r, a){
    return (r * Math.cos(a * Math.PI / 180));
};

Cow.prototype.getCartesianY = function (r, a){
    return (r * Math.sin(a * Math.PI / 180));
};
*/
