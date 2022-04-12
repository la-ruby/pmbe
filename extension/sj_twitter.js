// setInterval(function () {
  // console.log("D3BUG timer")
  let divs = document.querySelectorAll('.collection-list__product-tile')
    debugger
  divs.forEach(function(item) {

    return
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://pmbe-backend.herokuapp.com/experiment", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var elemDiv = document.createElement('div');
        elemDiv.style.cssText = 'font-size: 50%; position:absolute;top:1px;left:1px;width:100%;height:100%;opacity:1;z-index:100;background-color:rgba(0,0,0,0.5);color:white';
        elemDiv.innerHTML = 'VENDOR NAME: ' + xhr.responseText; 
        item.appendChild(elemDiv)
      }
    }
    xhr.send();
  })


// }, 2000);


