// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");
let changeToken = document.getElementById("changeToken");
let changeTokenButton = document.getElementById("changeTokenButton");


chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

chrome.storage.sync.get("pmbeToken", ({ pmbeToken }) => {
  changeToken.value = pmbeToken
});


// When the button is clicked, inject setPageBackgroundColor into current page
changeTokenButton.addEventListener("click", async () => {
  chrome.storage.sync.set({ "pmbeToken": changeToken.value });
});
