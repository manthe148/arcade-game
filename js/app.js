// Enemies our player must avoid

var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    var x = parseInt(this.x)
    if(x < 609){
        x += this.speed
        this.x = x.toString()
    } else {
        this.randomSpeed()
    }
// this finds out if the enemy and the play hit each other
    if ( ( player.x < Number(this.x) + 75 && player.x > Number(this.x) - 75 ) &&
             ( player.y < Number(this.y) + 75 && player.y > Number(this.y) - 75 )) {
                console.log('hit')
            //debugger;
                player.x = 200;
                player.y = 385;
        }



};



Enemy.prototype.randomSpeed = function(){
    function randomInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    this.x = 1;
    this.speed = randomInterval(3, 1);
    console.log('randomSpeed' + this.speed);
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;


}

Player.prototype.update = function(){
    let wins = []
    player.playerReset();
    if (player.y > 383) {
        player.y = 385
    }
    if (player.x > 400) {
        player.x = 400
    }
    if (player.x < 0) {
        player.x = 0
    }
    if (player.y <= -37){
        player.y = -37
        
        player.y = 385
        player.x = 200 
        //debugger;  
        //console.log('you win')
        alert('you win!')
    }
        
    }
    

Player.prototype.playerReset = function(){
    if (this.y < 20 && this.x < 20){
        this.x = 200
        this.y = 385
    }
}


Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
Player.prototype.handleInput = function(keys){
    switch(keys){
        case 'up':
            this.y -= 85;
            console.log('up')
            break
        case 'down':
            this.y += 85;
            console.log('down')
            break
        case 'left':
            this.x -= 100;
            console.log('left')
            break
        case 'right':
            this.x += 100;
            console.log('right')
            break    
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
 

var allEnemies = [
    enemy = new Enemy(0,50),
    enemy2 = new Enemy(0,130),
    enemy3 = new Enemy(0,220)
];

var player = new Player(200,385);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



