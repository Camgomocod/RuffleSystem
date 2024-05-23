# En tu PC principal
### Conector para la raspeberry 1 
from bleak import BleakClient
import keyboard
import asyncio

async def run(address, loop):
    client = BleakClient(address, loop=loop)

    while True:
        if keyboard.is_pressed('b'):  # Si se presiona 'b', envía un mensaje a la Raspberry Pi
            await client.write_gatt_char("0000110c-0000-1000-8000-00805f9b34fb", bytearray(b"play"))
            print("video en bucle iniciado")

address = "B8:27:EB:10:CA:13"  # La dirección Bluetooth de tu Raspberry Pi
loop = asyncio.get_event_loop()
loop.run_until_complete(run(address, loop))

