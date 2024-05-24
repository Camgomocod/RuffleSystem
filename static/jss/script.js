// Aquí iría tu código JavaScript para la interfaz
var io = require("socket.io-client");
var socket = io.connect("http://direccion_ip_de_la_raspberry:80");

// Para mostrar la interfaz del sorteo
socket.emit("mostrarSorteo");

// Para mostrar la publicidad
socket.emit("mostrarPublicidad");
