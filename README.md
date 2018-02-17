"# trayecto"
# Ver mi Trayecto
Este es un proyecto realizado para la clase de Topicos especiales en Telematica

## Arquitectura
El proyecto fue realizado usando la arquitectura MVC (Modelo vista controlador) para lo cual se uso HTML puro, Framework de CSS Materialize, Framework NodeJS Express y MongoDB como base de datos.

## Funciones implementadas
1. Registro de usuarios
2. Ingreso de usuarios al sistema
3. Toma de datos de geolocalización (latitud y longitud) del usuario.
4. Mapa de google con marcador en la localización actual del usuario.
5. CRUD de usuarios para uso interno.
6. Prueba en maquina local y en heroku.

## Funciones por cumplir
1. Historial de trayectos realizados por el usuario (Guardar los datos en la base de datos y mostrarlos en otra pagina).
2. Autorización de usuario (qué puede hacer y qué no al estar o no estar autenticado)
3. Logout del usuario.
4. Prueba en Data Center Academico (por fallas en el vpn)

## Instalación
1. Clonar repositorio.
  ⋅⋅* git clone https://github.com/Atabord/trayecto.git
2. Instalar node y npm [Instrucciones Aquí](https://nodejs.org/en/download/) Se recomienda la version LTS, es decir 8.9.4
  ⋅⋅* Verificar la instalación con "node -v" y "npm -v"
3. Instalar Mongodb community server [Instrucciones Aquí](https://www.mongodb.com/download-center#community)
4. Abrir la terminar e ir al directorio donde se encuentra la aplicación web.
5. Usar el comando "npm install", esto instalará todos los modulos encontrados en package.json, los cuales son necesarios para su funcionamiento
6. Probar la aplicación usando el comando "npm start", o "node server.js"
