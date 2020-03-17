var s = document.createElement('script');
s.src = chrome.runtime.getURL('inboxSaver.js');
s.onload = function () {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

document.addEventListener("iconReload", function (data) {
    chrome.runtime.sendMessage({ iconReload: true });
})