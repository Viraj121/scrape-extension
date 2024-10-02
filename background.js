chrome.action.onClicked.addListener((tab) => {
  // when the icon is clicked content script starts to Execute and scrape the table
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"], // Load the content script
  });
});
