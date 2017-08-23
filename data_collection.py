import requests
from datetime import datetime, timedelta

api_key = 'AGHHGWXKP1QHFNF5EV5PS7R13VLBTE3X'
Time = datetime.now().strftime("%Y-%m-%d%%20%H:%M:%S")


def get_solar_yield():
    #Solar Yield
    url_SY = 'https://monitoringapi.solaredge.com/site/421600/power?api_key=AGHHGWXKP1QHFNF5EV5PS7R13VLBTE3X&timeUnit=QUARTER_OF_AN_HOUR&startTime='+Time+'&endTime='+Time
    #payload = {'api_key':api_key, 'startTime':Time, 'endTime':Time, 'timeUnit':'QUARTER_OF_AN_HOUR'}
    r_SY = requests.get(url_SY).json()
    solarYieldMath = r_SY['power']['values'][-1]['value']
    return solarYieldMath


def get_token():
    url_auth = 'https://vrmapi.victronenergy.com/v2/auth/login'
    r_Auth = requests.post(url_auth, json ={"username": "jordan.s@scene.community",
    "password": "Lothian51"}).json()
    auth_token = r_Auth['token']
    return auth_token

def get_stats():
    auth_token = get_token()
    url_Stats = 'https://vrmapi.victronenergy.com/v2/installations/13017/stats?interval=15mins&type=custom&attributeCodes[]=a1&attributeCodes[]=a2&attributeCodes[]=a3&attributeCodes[]=g1&attributeCodes[]=g2&attributeCodes[]=g3&attributeCodes[]=bs'
    r_Stats = requests.get(url_Stats, headers={'X-Authorization': 'Bearer %s' %auth_token}).json()
    powerConsumptionMath = r_Stats['records']['a1'][-1][-1] + r_Stats['records']['a2'][-1][-1] + r_Stats['records']['a3'][-1][-1]
    gridMath = r_Stats['records']['g1'][-1][-1] + r_Stats['records']['g2'][-1][-1] + r_Stats['records']['g3'][-1][-1]
    batteryStatusMath = r_Stats['records']['bs'][-1][1]
    stats = [powerConsumptionMath, gridMath, batteryStatusMath]
    return stats
