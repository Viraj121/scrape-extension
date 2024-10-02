chrome.action.onClicked.addListener((tab) => {
  // Execute content script to scrape the table when the icon is clicked
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"], // Load the content script
  });
});
