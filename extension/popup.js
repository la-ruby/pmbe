// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let changeToken = document.getElementById("changeToken");
let changeTokenButton = document.getElementById("changeTokenButton");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

chrome.storage.sync.get("pmbe_token", ({ pmbe_token }) => {
  changeToken.value = pmbe_token
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeTokenButton.addEventListener("click", async () => {
  alert('here1')
  chrome.storage.sync.set({ "pmbe_token": "c" });
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}


