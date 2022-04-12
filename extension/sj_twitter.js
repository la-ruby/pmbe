console.log("here1")


  let divs = document.querySelectorAll('.collection-list__product-tile')

  // http://postman-echo.com/get?aaa=AAA
  // https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new

  divs.forEach(function(item) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        // JSON.parse does not evaluate the attacker's scripts.
        //alert(xhr.responseText);
        var elemDiv = document.createElement('div');
        elemDiv.style.cssText = 'font-size: 50%; position:absolute;top:1px;left:1px;width:100%;height:100%;opacity:1;z-index:100;background-color:rgba(0,0,0,0.5);color:white';
        elemDiv.innerHTML = 'VENDOR NAME: ' + xhr.responseText; 
        item.appendChild(elemDiv)
      }
    }
    xhr.send();
  })

