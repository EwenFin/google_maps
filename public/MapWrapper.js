var MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
}

var houseInfoString = '<h1>Ewen\'s House</h1><p>This is where the Magic Happen\'s<p>'

var infowindow = new google.maps.InfoWindow({
  content: houseInfoString
})

MapWrapper.prototype =  {
 addMarker: function(coords){
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })

 //  var infowindow = new google.maps.InfoWindow({
 //    content: houseInfoString
 // })
 // marker.addListener("click", function(){
 //  infowindow.open(this.googleMap, marker)
 // })
},

 addClickEvent: function(){
  google.maps.event.addListener(this.googleMap, "click", function(event){
    var lat = event.latLng.lat()
    var lng = event.latLng.lng()
    var coords = {lat, lng}
    console.log(lat)
    console.log(lng)
    }.bind(this))
  },

  addInfoWindow: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap })

  var infowindow = new google.maps.InfoWindow({
    content: houseInfoString
 })
 marker.addListener("click", function(){
  infowindow.open(this.googleMap, marker)
 })


  }


 }


 




