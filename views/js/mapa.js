
function initMap(){
  var ubicacion = new Localizacion(()=>{

    var myLatLon = {
      lat: ubicacion.latitude,
      lng: ubicacion.longitude
    }
    var options ={
      center: myLatLon,
      zoom: 15
    }

    var map = document.getElementById('map');
    var mapa = new google.maps.Map(map,options)
    //
    // for (var i = 0; i < Alatitude.length;i++){
    //   var marcador = new google.maps.Maker({
    //     position:{lat: Alatitude[i], lng: Alongitude[i]},
    //     map: mapa
    //   });
    // }

    var marcador = new google.maps.Marker({
      position: myLatLon,
      map: mapa
    });
  })
}
