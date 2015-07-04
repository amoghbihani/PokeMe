/**
 * Project: Poke Me!
 * Author: Amogh Bihani
 */

var TING, CLICK, ERROR;

function initSounds() {
    TING = document.createElement('audio');
    TING.src = "res/ting.ogg";

    CLICK = document.createElement('audio');
    CLICK.src = "res/click.ogg";

    ERROR = document.createElement('audio');
    ERROR.src = "res/error.ogg";
}
