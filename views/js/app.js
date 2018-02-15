$(".button-collapse").sideNav();

// const formLogin = document.querySelector('#login')
// const formData = new FormData(formLogin)
//
// formLogin.addEventListener('submit', event => {
//   event.preventDefault();
//   fetch('api/auth/login',{
//     method:'POST',
//     body: formData
//   })
//   .then(res => res.json())
//   .then(data => {
//     localStorage.setItem('token',data.token)
//     })
// })

/*
var latitude = new Array();
var longitude = new Array();
var coord = "";

 function findMe(){

  var output = document.getElementById("map");

  //Verificar si soporta geolocation
  if (navigator.geolocation) {
    output.innerHTML = "<p> Tu navegador soporta geolocalizacion</p>";
  } else {
    output.innerHTML = "<p> Tu navegador NO soporta geolocalizacion</p>";
  }

  //guarda e imprime la latitud y longitud
  function localizacion(posicion){
    latitude.push(posicion.coords.latitude);
    longitude.push(posicion.coords.longitude);

    //output.innerHTML = "<p>Latitud :"+ latitude +"</p><p>Longitud :"+ longitude + "</p>";

    //recorrer e imprimir los arreglo de latitud y longitud
    for(var i = 0; i < latitude.length; i++){
      coord = coord + "&markers=color:blue%7C"+ latitude[i] +","+longitude[i];
    }

    var imgURL = "https://maps.googleapis.com/maps/api/staticmap?center="+latitude[0]+","+longitude[0]+"&size=600x300"+coord+"&key=AIzaSyDm3hyYK-fG6itXImD0POPbvttNuzc-oIM";

    //cada vez que agrego un &markers= ... se puede agregar una coordenada diferente

    output.innerHTML = "<img src = '"+imgURL+"'>";
  }

  //error
  function error(){
    output.innerHTML = "<p> No se pudo obtener tu ubicación</p>";
  }

  //Recibe la posición actual
  navigator.geolocation.getCurrentPosition(localizacion, error);
}

*/
