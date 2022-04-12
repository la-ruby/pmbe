setInterval(function () {
  // console.log("D3BUG setInterval fired")
  document.querySelectorAll('.product-tile__image-link:not(.pmbe)').forEach(function(item) {
    // console.log("D3BUG overlaying")
    item.classList.add('pmbe')

    console.log(atob($(item).closest('.product-tile__form').find('.product-tile__product-title').text()))

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:2998/products/U3R1Y2sgSW4gVGhlIENpdHkgU2F0aW4gTWlkaSBEcmVzcyAtIFllbGxvdw==?token=a", true);
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


