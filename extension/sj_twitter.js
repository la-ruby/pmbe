setInterval(function () {
  // console.log("D3BUG setInterval fired")
  // let divs = document.querySelectorAll('.collection-list__product-tile')
  let divs = document.querySelectorAll('.product-tile__image-link')
  
  divs.forEach(function(item) {
    if (item.getAttribute('data-pmbe') == '1') {
      // console.log("skip")
      return
    }
    // console.log("D3BUG inside")
    item.setAttribute('data-pmbe', '1')
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pmbe-backend.herokuapp.com/experiment", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var elemDiv = document.createElement('div');
        elemDiv.style.cssText = 'font-size: 50%; position:absolute;top:10px;left:10px;width:100%;height:100%;opacity:1;z-index:1000;background-color:rgba(0,0,0,0.5);color:white';
        elemDiv.innerHTML = 'VENDOR NAME: ' + xhr.responseText; 
        item.appendChild(elemDiv)
      }
    }
    xhr.send();
  })


}, 1000);


