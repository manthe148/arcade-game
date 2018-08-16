// Enemies our player must avoid

var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;


};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    var x = parseInt(this.x)
    if(x < 600){
        x += this.speed
        this.x = x.toString()
    } else {
        this.randomSpeed()
    }

    //      if (player.x  < this.x + 10&&
    //     player.x  > this.x -10 &&
    //     player.y  < this.y +10 &&
    //     player.y  > this.y - 10) {
    //     console.log('hit')
    //     player.x = 200;
    //     player.y = 385;
    // }
    if ( ( player.x < Number(this.x) + 50 && player.x > Number(this.x) - 50 ) &&
             ( player.y < Number(this.y) + 50 && player.y > Number(this.y) - 50 )) {
                console.log('hit')
                player.x = 200;
                player.y = 385;
        }

};

Enemy.prototype.randomSpot = function(){
    function randomEnemy(bottom, middle, top){
        return Math.floor(Math.random() * (bottom + middle + top + 3) + bottom)
        this.y = 3
        this.change = randomEnemy(3,6)
    }
}

Enemy.prototype.randomSpeed = function(){
    function randomInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    this.x = 1;
    this.speed = randomInterval(1,5);
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
    player.playerReset();
    // this.collision();
}
Player.prototype.playerReset = function(){
    if (this.y < 20 && this.x < 20){
        this.x = 200
        this.y = 385
    }
}

// Player.prototype.collision = function(){
//     var playerChar = {
//         x: player.x,
//         y: player.y,
//         width:10    ,
//         height:50
//     }
//     var enemyChar = {
//         x: allEnemies.x,
//         y: allEnemies.y,
//         width:10,
//         height:50
//     }
//     if ((enemyChar.x > playerChar.x - 75 && enemyChar.x < playerChar.x + 75) &&
//         (enemyChar.y > playerChar.y - 75 && enemyChar.y < playerChar.y + 75)) {
//         console.log('hit')
//         this.x = 200;
//         this.y = 385;
// }
// }
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
 enemy = new Enemy(0,50);//220
 enemy2 = new Enemy(0,130);//130
 enemy3 = new Enemy(0,220);//50


var allEnemies = [enemy,enemy2,enemy3];

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



