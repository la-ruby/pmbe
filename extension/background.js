let color = '#3aa757';
let pmbeToken = '-';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);

  chrome.storage.sync.set({ pmbeToken });
});
