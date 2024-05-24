from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('mostrarSorteo')
def mostrarSorteo():
    # Aquí va el código para mostrar la interfaz del sorteo
    emit('actualizarInterfaz', {'interfaz': 'sorteo'})

@socketio.on('mostrarPublicidad')
def mostrarPublicidad():
    # Aquí va el código para mostrar la publicidad
    emit('actualizarInterfaz', {'interfaz': 'publicidad'})

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=80)
