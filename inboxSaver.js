console.log("Here comes the inbox saver, the glorious session extender - grab your croissants!");
var lastKeyDown = Date.now();
var timeNow = Date.now();

function longWaiting() {
    timeNow = Date.now();
    if (((timeNow - lastKeyDown) / 1000) > 15) {
        console.log("Reload!");
        var event = document.createEvent('Event');
        event.initEvent('iconReload');
        document.dispatchEvent(event);
        location.reload();
    } else {
        console.log("wait 15 secs");
        setTimeout(longWaiting, 60000);
    }
}

setTimeout(longWaiting, 200000); //200 seconds

document.addEventListener("keydown", keyDownTextField, false);
function keyDownTextField(e) {
    lastKeyDown = Date.now();
    console.log('key down at: ' + lastKeyDown);
}

document.onmousemove = function () {
    lastKeyDown = Date.now();
    console.log('mouse moving at: ' + lastKeyDown);
}
