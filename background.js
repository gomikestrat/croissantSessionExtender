chrome.runtime.onInstalled.addListener(function () { });

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { cancel: true };
  },
  { urls: ["*://browser.pipe.aria.microsoft.com/Collector/3.0/*"] },
  ["blocking"]
);
