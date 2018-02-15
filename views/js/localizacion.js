var Alatitude = new Array();
var Alongitude = new Array();
class Localizacion {
  constructor(callback) {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position)=>{
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        
        Alatitude.push(this.latitude);
        Alongitude.push(this.longitude);

        callback();
      });

    } else {
      alert("Tu navegador NO soporta geolocalizacion");
    }

  }
}
