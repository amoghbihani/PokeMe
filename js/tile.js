/**
 * Project: Poke Me!
 * Author: Amogh Bihani
 */

function Tile(success, endGame, num) {
    this.success = success;
    this.endGame = endGame;
    this.sleepy = false;
    this.slept = false;
    this.num = num;
    this.timer;
}

Tile.prototype.setElement = function(element) {
    this.element = element;
    this.elementStyle = this.element.className;
};

Tile.prototype.isSleepy = function() {
    return this.sleepy;
};

Tile.prototype.setSleepy = function() {
    this.sleepy = true;
    this.element.style.background = CURRENT_COLOR;
    this.element.style.opacity = "0.7";
    var tile = this;
    this.timer = setTimeout(function() {
        if (tile.isSleepy()) {
            tile.slept = true;
            tile.element.style.background = "#ff0000";
            tile.element.style.opacity = "0.9";
            tile.endGame();
        }
    }, DOT_TIMEOUT);
};

Tile.prototype.clicked = function() {
    if (this.slept)
        return;

    this.element.className +=" animateButtonClick";
    var tile = this;
    setTimeout(function() {
        tile.element.className = tile.elementStyle;
    }, 500);

    clearTimeout(this.timer);
    this.element.style.background = "";
    this.element.style.opacity = "1";
    if (this.sleepy) {
        this.sleepy = false;
        this.success();
    }
};

Tile.prototype.reset = function() {
    clearTimeout(this.timer);
    this.sleepy = false;
    this.slept = false;
    this.element.style.background = "";
    this.element.style.opacity = "1";
}
