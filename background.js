chrome.runtime.onInstalled.addListener(function() {});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  { urls: ["*://browser.pipe.aria.microsoft.com/Collector/3.0/*"] },
  ["blocking"]
);

function getMailURL() {
  return "https://outlook.office.com/mail";
}

function isMailURL(url) {
  return url.startsWith(getMailURL());
}

function repeater() {
  console.log("Happy croissant..");
  console.log(Date());
  chrome.tabs.query({}, function(tabs) {
    for (let i = 0, tab; (tab = tabs[i]); i++) {
      if (isMailURL(tab.url) && !tab.active) {
        // chrome.tabs.executeScript(tab.id, { file: "utilities.js" });
        chrome.tabs.update(tab.id, {
          url: "https://outlook.office.com/mail/inbox"
        });
        console.log("reloaded! id: " + tab.id);
        // chrome.tabs.update(tab.id, {
        //   url: "https://outlook.office.com/mail/inbox"
        // });
        //console.log("clicked Inbox! id: " + tab.id);
      }
    }
  });
  setTimeout(repeater, 5000);
}

setTimeout(repeater, 5000);
