chrome.runtime.onInstalled.addListener(function () {

});

function getMailURL() {
    return "https://outlook.office.com/mail/inbox";
}

function isMailURL(url) {
    return url.startsWith(getMailURL());
}

function repeater() {
    console.log("Happy croissant..");
    console.log(Date());
    chrome.tabs.query({}, function (tabs) {
        for (let i = 0, tab; tab = tabs[i]; i++) {
            if (isMailURL(tab.url) && !tab.active) {
                chrome.tabs.update(tab.id, { url: "https://outlook.office.com/mail/inbox" });
                console.log("reloaded! id: " + tab.id);
            }

        }
    });
    setTimeout(repeater, 240000);
}

setTimeout(repeater, 240000);