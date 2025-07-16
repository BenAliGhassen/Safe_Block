/* eslint-disable no-undef */
const redirectUrl = "https://www.youtube.com/watch?v=IAemTEoOl8I";

chrome.webNavigation.onCompleted.addListener((details) => {
  chrome.tabs.get(details.tabId, (tab) => {
    if (!tab || !tab.url) return;

    const url = tab.url.toLowerCase();

    // Fetch latest keywords from storage
    chrome.storage.sync.get(["keywords"], (result) => {
      const keywords = result.keywords || [];
      for (const keyword of keywords) {
        if (url.includes(keyword.toLowerCase())) {
          chrome.tabs.update(details.tabId, { url: redirectUrl });
          break;
        }
      }
    });
  });
}, {
  url: [{ urlMatches: ".*" }]
});
