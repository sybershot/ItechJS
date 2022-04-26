/*For a possible game, set up the creation of an object that uses a prototype.  Use Object.create(), a constructor function, or a class, to create a game character object. Set up the prototype to have the following properties:
-speed (default value: 6)
-stregnth (default value: 8)
-hitpoints (default value 150)
-a method that determines damage per second and returns it. That is equal to speed * stregnth
Create one object providing values for speed and hitpoints. Let stregnth use default value. Then display damage per second*/

/*var gameCharacter = {
    speed: 5,
    stregnth: 6,
    hitpoints: 100,
    dps: function() {
        return this.speed * this.stregnth;
    }
};

var char1 = Object.create(gameCharacter);
char1.speed = 7;
char1.hitpoints = 120;

console.log(char1.dps());*/

/*function GameCharacter(speed, stregnth, hitpoints) {
    if (speed) {
        this.speed = speed;
    }
    if (stregnth) {
        this.stregnth = stregnth;
    }
    if (hitpoints) {
        this.hitpoints = hitpoints;
    }
}

GameCharacter.prototype.speed = 5;
GameCharacter.prototype.stregnth = 6;
GameCharacter.prototype.hitpoints = 100;
GameCharacter.prototype.dps = function() {
    return this.speed * this.stregnth;
};

var char1 = new GameCharacter(10,null,180);
console.log(char1.dps());
*/

class GameCharacter {
    constructor(speed, stregnth, hitpoints) {
        if (speed) {
            this.speed = speed;
        }
        if (stregnth) {
             this.stregnth = stregnth;
        }
        if (hitpoints) {
            this.hitpoints = hitpoints;
        }
    }

    dps() {
        return this.speed * this.stregnth;
    }
}

GameCharacter.prototype.speed = 9;
GameCharacter.prototype.stregnth = 9;
GameCharacter.prototype.hitpoints = 110;

var char1 = new GameCharacter(15, null, 200);
console.log(char1.dps());




