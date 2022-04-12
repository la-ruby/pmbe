let color = '#3aa757';
let pmbe_token = '-';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  chrome.storage.sync.set({ pmbe_token });
});
