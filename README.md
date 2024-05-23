### Rufle system

---

## Planteamiento del plan

Para llevar a cabo el proyecto se usara el navegador en local host, donde se organizara tanto como la parte publicitaria del proyecto y el apartado del sorteo del descuento que se realiza cada 50 clientes, para ello se usara tanto como pyton para la apertura del servidor, la lectura de la señal del botón arcade de 12v, con javascript se enviara un evento web socket con lo cual se controla que se muestra en la interfaz, esto se hace mediante un script de node js

## Estructura del proyecto

/proyecto_sorteo
│
├── /static
│ ├── /css
│ │ └── estilos.css # Aquí irían tus estilos CSS
│ │
│ ├── /js
│ │ └── script.js # Aquí iría tu código JavaScript para la interfaz
│ │
│ └── /media
│ └── video.mp4 # Aquí irían tus videos de publicidad
│
├── /templates
│ ├── sorteo.html # Aquí iría el HTML para la interfaz del sorteo
│ └── publicidad.html # Aquí iría el HTML para la pantalla de publicidad
│
├── app.py # Aquí iría tu código Python para el servidor Flask
└── boton.py # Aquí iría tu código Python para el botón físico

- app.py es tu archivo principal de Python que ejecuta el servidor Flask.
- boton.py es el archivo de Python que maneja la interacción con el botón físico.
- La carpeta templates contiene tus archivos HTML que Flask utilizará para renderizar las páginas web.
- La carpeta static contiene tus archivos estáticos como CSS, JavaScript y videos de publicidad. Flask automáticamente sirve los archivos estáticos desde esta carpeta.
