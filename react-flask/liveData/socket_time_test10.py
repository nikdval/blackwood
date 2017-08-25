#!/usr/bin/env python
import logging
from websocket_server import WebsocketServer
import json
from time import sleep
import time
import pdb
from data_collection import get_solar_yield, get_stats

import random


def new_client(client, server):
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
        server.send_message_to_all(json_data)
        print("message_sent")
        #print(json_data)
        sleep(3000)


server = WebsocketServer(13254, host='127.0.0.1')
server.set_fn_new_client(new_client)
server.run_forever()
