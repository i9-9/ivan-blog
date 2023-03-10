---
title: "HTTP Requests"
subtitle: "Small guide to http requests"
date: "2023-03-05"
id: "4"
---


hyper text transfer protocol

Un protocolo: Serie de normas o reglas que hay que seguir a rajatabla para cumplir con un estándar que se pide..

![HTTP](/HTTP/1.png)


El protocolo nos permite cumplir con reglas para poder acceder a un recurso o servicio..

Un cliente se comunica con un servidor y el servidor le quiere dar una respuesta. 

Hay requests (solicitudes) y responses (respuestas) entre clientes y servidores 

Que establece protocolo http?

establece la forma que tiene que tener una req y una response

### **La request :**

![El request.png](/HTTP/2.png)

Las comunicaciones dentro de la informatica se dan dentro de un PAQUETE 

cada request que se haga mediante un paquete va a tener la estructura de la imagen. Lo que mas importa es el método, la URL, el header o cabecera y el body.

**El metodo**: **establece un verbo o forma de comunicacion HTTP.** De qué tipo es la request? (: GET, POST, PUT O DELETE)(EJ GET ES PARA TRAER DATOS. post es para guardar datos. 

**URL:** la url con la que nos queremos comunicar dentro del servidor. El servidor puede tener un montón de end points o puede ofrecer un montón de servicios. tenemos que especificar con cual de esos servicios nos queremos comunicar 

**HEADER:** van ciertas especificaciones importantes para completar la conexion entre cliente y servidor. x ej un mensaje que yo quiero transmitir. ej: un archivo JSON. 

**BODY:** es opcional. puede complementar el resto de los datos.

**La response:** tambien tienen un formato particular para transportar informacion necesaria para atender las solicitudes recibidas.

![El response.png](/HTTP/3.png)

**Status codes:** 

Codigos de rango 100

Codigos de rango 200

Codigos de rango 300

Codigos de rango 400

Codigos de rango 500

**Header o cabecera**

**Body**

![Codigos de estado](/HTTP/4.png)

MÉTODOS HTTP:

GET: El GET es para acceder a un recurso u obtener informacion sobre un recurso, ej. traer todos los alumnos de una base de datos. 

POST:

PUT :

DELETE:

PATCH: