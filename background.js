chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'greet',
      title: 'Say hi',
      contexts: ['page'],
      documentUrlPatterns: ['*://*.youtube.com/*'],
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'greet') {
      chrome.tabs.sendMessage(tab.id, { text: 'greet' }, (res) => {
        console.log(res);
      });
    }
  });