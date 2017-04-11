var initialize = function(){
  var center = {lat: 55.953251, lng: -3.188267}
  var container = document.querySelector("#main-map");
  var mainMap = new MapWrapper(container, center, 10);
  var button = document.querySelector('button')
  mainMap.addMarker(center);
  mainMap.addClickEvent();
  mainMap.addInfoWindow({lat: 55.93323344108339, lng: -3.2093247771263123})
  button.onclick = handleClick
}

var handleClick = function(){
  var center = {lat: 41.8781, lng: -87.6298 }
  var container = document.querySelector("#main-map");
  var mainMap = new MapWrapper(container, center, 10);
  mainMap.addMarker(center);
  
}

window.onload = initialize;