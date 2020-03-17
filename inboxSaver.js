console.log("Here comes the inbox saver, the glorious session extender - grab your croissants!");
var lastKeyDown = Date.now();;
var lastMouse = Date.now();;
var timeNow = Date.now();

function longWaiting() {
    timeNow = Date.now();
    if ((((timeNow - lastKeyDown) / 1000) > 5) && (((timeNow - lastMouse) / 1000) > 5)) {
        console.log("Reload!");
        var event = document.createEvent('Event');
        event.initEvent('iconReload');
        document.dispatchEvent(event);
        location.reload();
    } else {
        console.log("wait 5 secs");
        setTimeout(longWaiting, 5000);
    }
}

setTimeout(longWaiting, 200000);

document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
    lastKeyDown = Date.now();
    //console.log('key down at: ' + lastKeyDown);
}

document.onmousemove = function () {
    lastMouse = Date.now();
    //console.log('mouse moving at: ' + lastMouse);
}