browser.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await browser.tabs.get(activeInfo.tabId);

  // Don't try to move pinned tabs
  if (!tab.pinned) {
    browser.tabs.move(tab.id, { index: -1 });
  }
});
