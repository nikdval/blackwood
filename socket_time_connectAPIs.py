#!/usr/bin/env python
import logging
from websocket_server import WebsocketServer
import json
from time import sleep
import pdb

import random


def new_client(client, server):
    data = {}


    while True:
        solarYieldMath = random.uniform(0,10)
        batteryStatusMath = random.randint(0,100)
        powerConsumptionMath = random.randint(0,10)
        batteryFlowMath = random.uniform(-10,10)
        gridMath = random.randint(-10,10)

        data['UnixTime'] = 1493222751
        data["PowerConsumption"] = powerConsumptionMath
        data["BatteryStatus"]= batteryStatusMath
        data["Grid"]=gridMath
        data["BatteryFlow"]=batteryFlowMath
        data["SolarYield"] = solarYieldMath

        json_data = json.dumps(data)
        server.send_message_to_all(json_data)
        print("message_sent")
        sleep(5)


server = WebsocketServer(13254, host='127.0.0.1')
server.set_fn_new_client(new_client)
server.run_forever()
