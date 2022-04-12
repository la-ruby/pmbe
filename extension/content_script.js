setInterval(function () {
  // console.log("D3BUG setInterval fired")

  chrome.storage.sync.get("pmbe_token", ({ pmbe_token }) => {
    window.pmbe_token = pmbe_token
  });

  document.querySelectorAll('.product-tile__image-link:not(.pmbe)').forEach(function(item) {
    // console.log("D3BUG overlaying")
    item.classList.add('pmbe')

    let myEncoded = btoa($(item).closest('.product-tile__form').find('.product-tile__product-title').text().trim())

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:2998/products/" + myEncoded  + '?token=' + window.pmbe_token, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var elemDiv = document.createElement('div');
        elemDiv.style.cssText = 'font-size: 80%; position:absolute;top:0px;left:1px;width:100%;height:100%;opacity:1;z-index:1000;background-color:rgba(0,0,0,0.5);color:white;overflow:scroll';
        elemDiv.innerHTML = '<pre>' + JSON.stringify( JSON.parse(xhr.responseText), null, 2) + '</pre>'
        item.appendChild(elemDiv)
      }
    }
    xhr.send();
  })
}, 1000);


