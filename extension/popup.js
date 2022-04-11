// Initialize butotn with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
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
  alert(document.querySelectorAll('.collection-list__product-tile .product-tile__image-line').length)
  var elemDiv = document.createElement('div');
  elemDiv.style.cssText = 'font-size: 50%; position:absolute;top:1px;left:1px;width:100%;height:100%;opacity:1;z-index:100;background-color:rgba(0,0,0,0.5);color:white';
  elemDiv.innerHTML = 'VENDOR NAME XYZ APPAREL'; 
  document.querySelectorAll('.collection-list__product-tile .product-tile__image-line')[0].appendChild(elemDiv)

}
