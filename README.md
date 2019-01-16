# Trinomio-Buscador

Backend:
El modelo se encuentra desarrollado en JavaScript, con la metodologia TDD usando Mocha y Chai para dicho proceso de testing.
La API esta tambien hecha en JavaScript.

Dependencias instaladas con node:
Mocha y Chai : npm i mocha chai --save-dev
Request-promise: npm i reques-promise
Request: npm i request
Express: npm i express
Axios: npm i axios
Router: npm i react-router
Router dom : npm i react-router-dom

Correr Test: npm run test -s

Levantar el servidor( desde la carpeta API que se encuentra dentro de Backend): node BuscadorServer.js
URL del servidor: http://localhost:5000/api
Posibles endpoint: 
*http://localhost:5000/api/sitio/{Id_SITIO}  (obtener categorias desitio especifico )
*http://localhost:5000/api/sitio/{Id_SITIO}//productos?id_categoria={Id_CATEGORIA} (obtener productos de categotia especifica )
*http://localhost:5000/api/sitios (obtener todos los sitios )

Frontend:
Levantar servidor: 
Desde la carpeta frontend-react: npm start
URL del servidor: http://localhost:3000 (ruta de Home)



