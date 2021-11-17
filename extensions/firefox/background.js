browser.pageAction.onClicked.addListener(tab => {
  browser.tabs.executeScript(tab.id, {
    file: "bundle.js"
  }).then(() => browser.pageAction.setIcon({
    tabId: tab.id,
    path: {
      16: "icon16.png",
      48: "icon48.png",
      128: "icon128.png"
    }
  }));
});

