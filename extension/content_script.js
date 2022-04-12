setInterval(function () {
  // console.log("D3BUG setInterval fired")
  document.querySelectorAll('.product-tile__image-link:not(.pmbe)').forEach(function(item) {
    // console.log("D3BUG overlaying")
    item.classList.add('pmbe')
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pmbe-backend.herokuapp.com/products/testing", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var elemDiv = document.createElement('div');
        elemDiv.style.cssText = 'font-size: 50%; position:absolute;top:0px;left:1px;width:100%;height:100%;opacity:1;z-index:1000;background-color:rgba(0,0,0,0.5);color:white';
        elemDiv.innerHTML = '<br>VENDOR NAME: ' + xhr.responseText;
        item.appendChild(elemDiv)
      }
    }
    xhr.send();
  })
}, 1000);


