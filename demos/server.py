from flask import Flask, render_template
import json
import requests


app = Flask(__name__)



"""
#API-Teams
url = "https://api-basketball.p.rapidapi.com/teams"

querystring = {"league":"12","season":"2020-2021"}

headers = {
    'x-rapidapi-key': "46e198f942msh1ed866ffdc3d91cp177a3bjsn1ebc54ccb8a4",
    'x-rapidapi-host': "api-basketball.p.rapidapi.com"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
"""

#json laden
def lade_daten_aus_json (pfad, standard_wert = []):
    try:
        with open(pfad, 'r') as datei:
            return json.load(datei)
    except Exception:
        return standard_wert

#ins json schreiben
def schreibe_daten_in_json(pfad, daten):
    with open(pfad, 'w') as datei:
        json.dump(daten, datei, indent = 4)

@app.route('/',  methods=['GET'])
def index():
	schreibe_daten_in_json("new_teams.json")
    return render_template("/index.html")




if __name__ == "__main__":
	app.run(debug=True, port=5000)