#!/usr/bin/env python
import logging
from websocket_server import WebsocketServer
import json
from time import sleep
import time
import pdb
from data_collection import get_solar_yield, get_stats
import os
import random

# Called for every client connecting (after handshake)
def new_client(client, server):
    print("New client connected and was given id %d" % client['id'])
    data = {}


    while True:
        stats = get_stats()
        solarYieldMath = get_solar_yield()
        batteryStatusMath = stats[2]
        powerConsumptionMath = stats[0]
        #batteryFlowMath = random.uniform(-10,10)
        gridMath = stats[1]

        data['UnixTime'] = int(time.time())
        data["PowerConsumption"] = powerConsumptionMath
        data["BatteryStatus"]= batteryStatusMath
        data["Grid"]=gridMath
        #data["BatteryFlow"]=batteryFlowMath
        data["SolarYield"] = solarYieldMath

        json_data = json.dumps(data)
        server.send_message(client,json_data)
        print("message_sent")
        print(json_data)
        sleep(3000)

# Called for every client disconnecting
def client_left(client, server):
	print("Client(%d) disconnected" % client['id'])

#for local run assign port variable to 5000 and change host to 127.0.0.1
port = int(os.environ.get("PORT", 5000))
server = WebsocketServer(port, host='0.0.0.0')
server.set_fn_new_client(new_client)
server.run_forever()
